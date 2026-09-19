import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa_q54byr.css';
import '../../css/o/oncy5ov1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fa_q54byr"/><path class="oncy5ov1k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ledger",
	});
}

export default Component;
