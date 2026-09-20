import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rma5_ql1e.css';
import '../../css/a/a8a2mlbtc.css';
import '../../css/u/u753xh53q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rma5_ql1e"/><path class="a8a2mlbtc"/><path class="u753xh53q"/></g>`,
		"fallback": "solar:sidebar-close-linear",
	});
}

export default Component;
