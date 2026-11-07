import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bkthlg5ro.css';
import '../../css/p/ph0g_g1rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bkthlg5ro"/><path class="ph0g_g1rz"/></g>`,
		"fallback": "solar:skip-next-broken",
	});
}

export default Component;
