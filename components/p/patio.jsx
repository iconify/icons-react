import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ys4s45ewf.css';
import '../../css/c/c3pe--tcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ys4s45ewf"/><path class="c3pe--tcb"/></g>`,
		"fallback": "hugeicons:patio",
	});
}

export default Component;
