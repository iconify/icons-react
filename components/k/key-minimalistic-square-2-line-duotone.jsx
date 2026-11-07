import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cm2jpv1nl.css';
import '../../css/b/bf2w_ebvb.css';
import '../../css/b/b0787_b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cm2jpv1nl"/><path class="bf2w_ebvb"/><path class="b0787_b7z"/></g>`,
		"fallback": "solar:key-minimalistic-square-2-line-duotone",
	});
}

export default Component;
