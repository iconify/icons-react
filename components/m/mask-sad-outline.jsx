import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-zq19pwq.css';
import '../../css/q/q8y36zb8b.css';
import '../../css/f/fqw-m9rcd.css';
import '../../css/b/b5q-1142n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-zq19pwq"/><path class="q8y36zb8b"/><path clip-rule="evenodd" class="fqw-m9rcd"/><path class="b5q-1142n"/></g>`,
		"fallback": "solar:mask-sad-outline",
	});
}

export default Component;
