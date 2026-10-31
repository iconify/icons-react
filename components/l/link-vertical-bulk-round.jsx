import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cte3ouyfy.css';
import '../../css/b/bey6c-67d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cte3ouyfy"/><path class="bey6c-67d"/></g>`,
		"fallback": "coolicons:link-vertical-bulk-round",
	});
}

export default Component;
