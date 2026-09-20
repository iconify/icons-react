import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvn6ntdsb.css';
import '../../css/y/ybzbxbbqr.css';
import '../../css/g/gd5-rmb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvn6ntdsb"/><path class="ybzbxbbqr"/><path class="gd5-rmb8p"/></g>`,
		"fallback": "proicons:microphone-off",
	});
}

export default Component;
