import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnklneb_k.css';
import '../../css/k/kiol6ablm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><rect transform="rotate(45 15.712 1.924)" class="fnklneb_k"/><path class="kiol6ablm"/></g>`,
		"fallback": "proicons:ruler-diagonal",
	});
}

export default Component;
