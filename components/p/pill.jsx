import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yrce0dx3b.css';
import '../../css/e/ey58x5bil.css';
import '../../css/k/kp5upqfdx.css';
import '../../css/v/vg2dcxbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yrce0dx3b"/><path class="ey58x5bil wm-shadow"/><path class="kp5upqfdx"/><path class="vg2dcxbfg"/></g>`,
		"fallback": "withicons-brutal:pill",
	});
}

export default Component;
