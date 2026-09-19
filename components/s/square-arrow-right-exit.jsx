import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a-2olmbmo.css';
import '../../css/d/drisl7d-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a-2olmbmo"/><path class="drisl7d-i"/></g>`,
		"fallback": "hugeicons:square-arrow-right-exit",
	});
}

export default Component;
