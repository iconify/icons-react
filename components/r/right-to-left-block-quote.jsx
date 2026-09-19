import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xb8y6obow.css';
import '../../css/b/bgngs4bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xb8y6obow"/><path class="bgngs4bwc"/></g>`,
		"fallback": "hugeicons:right-to-left-block-quote",
	});
}

export default Component;
