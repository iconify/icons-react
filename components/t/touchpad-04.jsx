import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zo1pb5bnq.css';
import '../../css/t/t5j1l6b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zo1pb5bnq"/><path class="t5j1l6b7j"/></g>`,
		"fallback": "hugeicons:touchpad-04",
	});
}

export default Component;
