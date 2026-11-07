import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r6ybk4brv.css';
import '../../css/r/rwmcjfboi.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r6ybk4brv"/><path class="rwmcjfboi"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:text-bold-circle-broken",
	});
}

export default Component;
