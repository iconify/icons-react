import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nltco9bby.css';
import '../../css/v/v3jlvxklw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nltco9bby"/><path class="v3jlvxklw"/></g>`,
		"fallback": "hugeicons:kitchen-utensils",
	});
}

export default Component;
