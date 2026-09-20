import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/ps0d2xk2r.css';
import '../../css/w/winbtub7u.css';
import '../../css/t/t0h-rybuv.css';
import '../../css/v/vjzov1blj.css';
import '../../css/n/nlopadc2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ps0d2xk2r"/><path class="winbtub7u"/><path class="t0h-rybuv"/><path class="vjzov1blj"/><path class="nlopadc2z"/></g>`,
		"fallback": "solar:tea-cup-broken",
	});
}

export default Component;
