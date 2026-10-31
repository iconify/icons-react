import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uhbq_rs1x.css';
import '../../css/d/dcgvrdbxk.css';
import '../../css/a/aljmnkxoj.css';
import '../../css/y/y_58e9y5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uhbq_rs1x wm-shadow"/><path class="dcgvrdbxk"/><path class="aljmnkxoj"/><path class="y_58e9y5v"/></g>`,
		"fallback": "withicons-retro:screwdriver",
	});
}

export default Component;
