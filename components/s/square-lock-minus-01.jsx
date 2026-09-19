import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ysimk3b-t.css';
import '../../css/w/wr28_ubwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ysimk3b-t"/><path class="wr28_ubwm"/></g>`,
		"fallback": "hugeicons:square-lock-minus-01",
	});
}

export default Component;
