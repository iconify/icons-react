import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xm-1off4h.css';
import '../../css/d/dg5sb_lqv.css';
import '../../css/n/n4nm1ab_l.css';
import '../../css/e/e_w-t6bwn.css';
import '../../css/r/rjk8xfbbv.css';
import '../../css/f/f066lccuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xm-1off4h"/><path class="dg5sb_lqv"/><path class="n4nm1ab_l"/><path class="e_w-t6bwn"/><path class="rjk8xfbbv"/><path class="f066lccuw"/></g>`,
		"fallback": "solar:server-minimalistic-line-duotone",
	});
}

export default Component;
