import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpx2n4b1z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpx2n4b1z"/>`,
		"fallback": "f7:rectangle-stack",
	});
}

export default Component;
