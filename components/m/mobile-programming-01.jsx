import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t5ua-l4vn.css';
import '../../css/k/k2lmn8b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t5ua-l4vn"/><path class="k2lmn8b2l"/></g>`,
		"fallback": "hugeicons:mobile-programming-01",
	});
}

export default Component;
