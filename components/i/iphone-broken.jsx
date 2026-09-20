import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3jogvtxu.css';
import '../../css/e/erekrcbav.css';
import '../../css/a/abin0ybht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l3jogvtxu"/><path class="erekrcbav"/><path class="abin0ybht"/></g>`,
		"fallback": "solar:iphone-broken",
	});
}

export default Component;
