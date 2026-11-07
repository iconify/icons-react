import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/icy1adcel.css';
import '../../css/y/y1k58pkic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="icy1adcel"/><path class="y1k58pkic"/></g>`,
		"fallback": "solar:plane-2-broken",
	});
}

export default Component;
