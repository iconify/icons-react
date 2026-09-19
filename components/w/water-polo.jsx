import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xmrk_ccvr.css';
import '../../css/p/p4pj9q2fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xmrk_ccvr"/><path class="p4pj9q2fl"/></g>`,
		"fallback": "hugeicons:water-polo",
	});
}

export default Component;
