import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ckt9jvp0q.css';
import '../../css/k/k-lphyyht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ckt9jvp0q"/><path clip-rule="evenodd" class="k-lphyyht"/></g>`,
		"fallback": "griddy-icons:term-deposit",
	});
}

export default Component;
