import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rse9upehb.css';
import '../../css/u/usda11bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rse9upehb"/><path class="usda11bhl"/></g>`,
		"fallback": "hugeicons:locker-01",
	});
}

export default Component;
