import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gyax4-b5o.css';
import '../../css/o/o8vh8nbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gyax4-b5o"/><path class="o8vh8nbwm"/></g>`,
		"fallback": "coolicons:rocket-bulk-round",
	});
}

export default Component;
