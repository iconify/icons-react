import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fmoti-6eo.css';
import '../../css/h/hds6_y_gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fmoti-6eo secondary"/><path class="hds6_y_gt primary"/></g>`,
		"fallback": "iconaut:planet-duotone",
	});
}

export default Component;
