import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y05qdhd2p.css';
import '../../css/p/prfumyb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y05qdhd2p"/><path class="prfumyb0d"/></g>`,
		"fallback": "hugeicons:swipe-down-06",
	});
}

export default Component;
