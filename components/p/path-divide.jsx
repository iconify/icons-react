import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6a6g7eze.css';
import '../../css/p/py6kjhbkb.css';
import '../../css/x/x-3-lrb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6a6g7eze"/><path class="py6kjhbkb"/><path class="x-3-lrb6c"/></g>`,
		"fallback": "gg:path-divide",
	});
}

export default Component;
