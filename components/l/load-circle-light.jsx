import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmbf45xcp.css';
import '../../css/y/yhp7v1b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmbf45xcp"/><path class="yhp7v1b2d"/></g>`,
		"fallback": "lets-icons:load-circle-light",
	});
}

export default Component;
