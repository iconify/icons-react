import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bm-y52fyp.css';
import '../../css/x/xn6yeebtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bm-y52fyp"/><path class="xn6yeebtr"/></g>`,
		"fallback": "solar:scissors-broken",
	});
}

export default Component;
