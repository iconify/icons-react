import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-ii8ac4d.css';
import '../../css/y/y0mw4ibgt.css';
import '../../css/i/im1hkobej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t-ii8ac4d"/><path class="y0mw4ibgt"/><path class="im1hkobej"/></g>`,
		"fallback": "solar:laptop-minimalistic-broken",
	});
}

export default Component;
