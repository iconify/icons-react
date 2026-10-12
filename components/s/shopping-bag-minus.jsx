import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp_1wgb1c.css';
import '../../css/t/t6168-71n.css';
import '../../css/s/sx9r5_bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kp_1wgb1c"/><path class="t6168-71n"/><path class="sx9r5_bwg"/></g>`,
		"fallback": "andrsrxn:shopping-bag-minus",
	});
}

export default Component;
