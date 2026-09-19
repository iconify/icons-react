import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0q26nbpz.css';
import '../../css/y/yv4xwebgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0q26nbpz"/><path class="yv4xwebgh"/></g>`,
		"fallback": "hugeicons:package-out-of-stock",
	});
}

export default Component;
