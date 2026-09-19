import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tzgw54brv.css';
import '../../css/h/hi1wt-u2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tzgw54brv"/><path class="hi1wt-u2p"/></g>`,
		"fallback": "hugeicons:list",
	});
}

export default Component;
