import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qqlqjn7ee.css';
import '../../css/a/ae2xmubti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qqlqjn7ee"/><path class="ae2xmubti"/></g>`,
		"fallback": "solar:pulse-2-bold",
	});
}

export default Component;
