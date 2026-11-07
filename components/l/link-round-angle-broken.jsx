import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/elr1vxapf.css';
import '../../css/t/tvx2b7bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="elr1vxapf"/><path class="tvx2b7bhy"/></g>`,
		"fallback": "solar:link-round-angle-broken",
	});
}

export default Component;
