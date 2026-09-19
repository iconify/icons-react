import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfn3ybbni.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfn3ybbni"/>`,
		"fallback": "gis:modify-poly-o",
	});
}

export default Component;
