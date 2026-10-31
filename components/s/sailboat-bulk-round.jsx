import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0-5hjbir.css';
import '../../css/t/t2f8xubhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0-5hjbir"/><path class="t2f8xubhi"/></g>`,
		"fallback": "coolicons:sailboat-bulk-round",
	});
}

export default Component;
