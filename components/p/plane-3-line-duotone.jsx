import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vngos9bgp.css';
import '../../css/y/yu0oib0cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vngos9bgp"/><path class="yu0oib0cg"/></g>`,
		"fallback": "solar:plane-3-line-duotone",
	});
}

export default Component;
