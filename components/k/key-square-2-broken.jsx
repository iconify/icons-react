import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q7ln9fnmr.css';
import '../../css/w/wdxl6ccki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q7ln9fnmr"/><path class="wdxl6ccki"/></g>`,
		"fallback": "solar:key-square-2-broken",
	});
}

export default Component;
