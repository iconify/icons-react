import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbqfi4sib.css';
import '../../css/y/y7r8vsqdr.css';
import '../../css/e/e56ib4b-i.css';
import '../../css/e/e0oiq1b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fbqfi4sib"/><path clip-rule="evenodd" class="y7r8vsqdr"/><path class="e56ib4b-i"/><path class="e0oiq1b4b"/></g>`,
		"fallback": "solar:jar-of-pills-bold",
	});
}

export default Component;
