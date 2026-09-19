import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lc4s8kbon.css';
import '../../css/g/gybzzbn-v.css';
import '../../css/q/q0a-0wbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lc4s8kbon"/><path class="gybzzbn-v"/><path class="q0a-0wbuy"/></g>`,
		"fallback": "hugeicons:mask-love",
	});
}

export default Component;
