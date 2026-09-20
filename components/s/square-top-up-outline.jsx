import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pypq3rbwx.css';
import '../../css/n/nu25t6b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pypq3rbwx"/><path class="nu25t6b4e"/></g>`,
		"fallback": "solar:square-top-up-outline",
	});
}

export default Component;
