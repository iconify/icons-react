import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s4v36abdu.css';
import '../../css/k/knj1esdsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s4v36abdu"/><path class="knj1esdsq"/></g>`,
		"fallback": "hugeicons:internet-antenna-03",
	});
}

export default Component;
