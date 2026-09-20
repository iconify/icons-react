import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/l/l0wsz0bge.css';
import '../../css/u/u7-f98bkg.css';
import '../../css/j/jr044sswv.css';
import '../../css/t/t5koibbkf.css';
import '../../css/q/qqdkw_blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="l0wsz0bge"/><path class="u7-f98bkg"/><ellipse class="jr044sswv"/><path class="t5koibbkf"/><path class="qqdkw_blr"/></g>`,
		"fallback": "solar:users-group-two-rounded-line-duotone",
	});
}

export default Component;
