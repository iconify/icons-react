import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oztnz4lum.css';
import '../../css/j/j8adolbjh.css';
import '../../css/l/lcbr24bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oztnz4lum"/><path class="j8adolbjh"/><path class="lcbr24bbr"/></g>`,
		"fallback": "hugeicons:utensils",
	});
}

export default Component;
