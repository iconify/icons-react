import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zqc034vkr.css';
import '../../css/z/zf-7-266r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zqc034vkr"/><path class="zf-7-266r"/></g>`,
		"fallback": "solar:rewind-back-broken",
	});
}

export default Component;
