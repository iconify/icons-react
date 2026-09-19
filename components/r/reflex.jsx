import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guaaaoxce.css';
import '../../css/b/bmj16cwem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guaaaoxce"/><path class="bmj16cwem"/></g>`,
		"fallback": "hugeicons:reflex",
	});
}

export default Component;
