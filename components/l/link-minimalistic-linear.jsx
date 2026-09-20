import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/arzno-wyz.css';
import '../../css/x/xk1mui9dn.css';
import '../../css/t/tgsr-hz9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="arzno-wyz"/><path class="xk1mui9dn"/><path class="tgsr-hz9s"/></g>`,
		"fallback": "solar:link-minimalistic-linear",
	});
}

export default Component;
