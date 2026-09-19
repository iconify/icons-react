import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqeahfvvr.css';
import '../../css/e/ezyyvcv0l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqeahfvvr"/><path class="ezyyvcv0l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:level-slider",
	});
}

export default Component;
