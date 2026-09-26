import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1au-krtp.css';
import '../../css/n/ngi7k5b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i1au-krtp"/><path clip-rule="evenodd" class="ngi7k5b4w"/></g>`,
		"fallback": "solar:panel-top-close-outline",
	});
}

export default Component;
