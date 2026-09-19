import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rshz5cree.css';
import '../../css/c/crq3xkc8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rshz5cree"/><path class="crq3xkc8j"/></g>`,
		"fallback": "hugeicons:swipe-up-08",
	});
}

export default Component;
