import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaq8pz9zt.css';
import '../../css/c/cc5mjs5cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zaq8pz9zt"/><path class="cc5mjs5cv"/></g>`,
		"fallback": "hugeicons:waves-arrow-down",
	});
}

export default Component;
