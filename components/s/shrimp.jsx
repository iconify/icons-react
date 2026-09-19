import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s92qk0c1o.css';
import '../../css/i/i9l7f6f9f.css';
import '../../css/s/sj5y__bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s92qk0c1o"/><path class="i9l7f6f9f"/><path class="sj5y__bmo"/></g>`,
		"fallback": "hugeicons:shrimp",
	});
}

export default Component;
