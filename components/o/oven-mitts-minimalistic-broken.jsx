import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zig-ebb6a.css';
import '../../css/c/ccspchbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zig-ebb6a"/><path class="ccspchbwo"/></g>`,
		"fallback": "solar:oven-mitts-minimalistic-broken",
	});
}

export default Component;
