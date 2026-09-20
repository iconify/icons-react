import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tzmtlc8up.css';
import '../../css/p/p38ldjuia.css';
import '../../css/n/nutxvywlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tzmtlc8up"/><path class="p38ldjuia"/><path class="nutxvywlz"/></g>`,
		"fallback": "solar:magnet-wave-linear",
	});
}

export default Component;
