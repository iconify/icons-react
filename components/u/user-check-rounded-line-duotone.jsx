import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5s0pfbji.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/m/mcnyqibza.css';
import '../../css/r/rdnf-acrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l5s0pfbji"/><circle class="dtl23o_xq"/><path class="mcnyqibza"/><path class="rdnf-acrq"/></g>`,
		"fallback": "solar:user-check-rounded-line-duotone",
	});
}

export default Component;
