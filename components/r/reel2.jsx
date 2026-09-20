import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed7_p-b3q.css';
import '../../css/k/k4wzucbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ed7_p-b3q"/><path class="k4wzucbem"/></g>`,
		"fallback": "reicon:reel2",
	});
}

export default Component;
