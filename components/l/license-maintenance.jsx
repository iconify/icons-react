import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jeod1kaix.css';
import '../../css/s/sa8vaeput.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jeod1kaix"/><path class="sa8vaeput"/></g>`,
		"fallback": "hugeicons:license-maintenance",
	});
}

export default Component;
