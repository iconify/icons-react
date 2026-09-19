import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w9zfv5bot.css';
import '../../css/l/ld7d0g10q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w9zfv5bot"/><path class="ld7d0g10q"/></g>`,
		"fallback": "hugeicons:squares-intersect",
	});
}

export default Component;
