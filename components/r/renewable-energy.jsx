import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wjjmiygmi.css';
import '../../css/k/k8k1ovbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wjjmiygmi"/><path class="k8k1ovbab"/></g>`,
		"fallback": "hugeicons:renewable-energy",
	});
}

export default Component;
