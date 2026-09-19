import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b_o0z2thl.css';
import '../../css/w/wrq8myb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b_o0z2thl"/><path class="wrq8myb0b"/></g>`,
		"fallback": "hugeicons:keyframes-double-remove",
	});
}

export default Component;
