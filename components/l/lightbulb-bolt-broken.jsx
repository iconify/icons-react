import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x8z4k_bji.css';
import '../../css/b/bfdg0dbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x8z4k_bji"/><path class="bfdg0dbla"/></g>`,
		"fallback": "solar:lightbulb-bolt-broken",
	});
}

export default Component;
