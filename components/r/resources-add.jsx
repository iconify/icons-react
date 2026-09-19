import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jko4vwbbq.css';
import '../../css/n/nxyeiacdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jko4vwbbq"/><path class="nxyeiacdt"/></g>`,
		"fallback": "hugeicons:resources-add",
	});
}

export default Component;
