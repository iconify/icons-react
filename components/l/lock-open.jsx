import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qj1bmn_rp.css';
import '../../css/q/qwhbg0beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qj1bmn_rp"/><path class="qwhbg0beo"/></g>`,
		"fallback": "hugeicons:lock-open",
	});
}

export default Component;
