import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3dki1ewx.css';
import '../../css/c/c5sx77oln.css';
import '../../css/l/lvh0zsbby.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l3dki1ewx"/><path class="c5sx77oln"/><path class="lvh0zsbby"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sleepy-face",
	});
}

export default Component;
