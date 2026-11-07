import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vrq15k_3i.css';
import '../../css/b/bhy-axcbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vrq15k_3i"/><path class="bhy-axcbm"/></g>`,
		"fallback": "solar:square-bottom-up-broken",
	});
}

export default Component;
