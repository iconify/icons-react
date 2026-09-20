import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doete9yan.css';
import '../../css/w/wsvb1rbkf.css';
import '../../css/p/p11hmpggb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="doete9yan"/><path class="wsvb1rbkf"/><path class="p11hmpggb"/></g>`,
		"fallback": "solar:money-bag-broken",
	});
}

export default Component;
