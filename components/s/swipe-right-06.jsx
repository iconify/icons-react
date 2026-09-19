import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dr16zn8ui.css';
import '../../css/o/o8ip2lepv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dr16zn8ui"/><path class="o8ip2lepv"/></g>`,
		"fallback": "hugeicons:swipe-right-06",
	});
}

export default Component;
