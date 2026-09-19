import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvi0yhb5v.css';
import '../../css/i/ig3_5e09b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pvi0yhb5v"/><path class="ig3_5e09b"/></g>`,
		"fallback": "hugeicons:login-square-02",
	});
}

export default Component;
