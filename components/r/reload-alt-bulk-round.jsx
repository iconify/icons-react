import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ikb8-47xq.css';
import '../../css/f/frstq-lyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ikb8-47xq"/><path class="frstq-lyp"/></g>`,
		"fallback": "coolicons:reload-alt-bulk-round",
	});
}

export default Component;
