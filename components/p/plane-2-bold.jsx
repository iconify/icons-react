import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jeprz2bmb.css';
import '../../css/a/a_9inrboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jeprz2bmb"/><path class="a_9inrboj"/></g>`,
		"fallback": "solar:plane-2-bold",
	});
}

export default Component;
