import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3jogvtxu.css';
import '../../css/e/erekrcbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l3jogvtxu"/><path class="erekrcbav"/></g>`,
		"fallback": "solar:smartphone-broken",
	});
}

export default Component;
