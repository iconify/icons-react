import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/q/qb4wniidq.css';
import '../../css/r/r0p-ejt9x.css';
import '../../css/l/lt36robqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="qb4wniidq"/><path class="r0p-ejt9x"/><path class="lt36robqc"/></g>`,
		"fallback": "solar:user-minus-linear",
	});
}

export default Component;
