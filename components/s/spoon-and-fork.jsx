import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/leg_5vryx.css';
import '../../css/t/tmb-isbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="leg_5vryx"/><path class="tmb-isbxs"/></g>`,
		"fallback": "hugeicons:spoon-and-fork",
	});
}

export default Component;
