import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7qq26j7t.css';
import '../../css/v/vs22qfbhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q7qq26j7t"/><path clip-rule="evenodd" class="vs22qfbhf"/></g>`,
		"fallback": "heroicons-solid:pencil-alt",
	});
}

export default Component;
