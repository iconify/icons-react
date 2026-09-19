import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oefdycc4d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oefdycc4d"/>`,
		"fallback": "f7:pause-rectangle-fill",
	});
}

export default Component;
