import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x49pdtb6x.css';
import '../../css/g/g_0t4qnrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x49pdtb6x"/><path class="g_0t4qnrd"/></g>`,
		"fallback": "hugeicons:link-01",
	});
}

export default Component;
