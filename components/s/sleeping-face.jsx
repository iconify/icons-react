import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg60vrb4y.css';
import '../../css/v/vn-c7sg-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hg60vrb4y"/><path class="vn-c7sg-r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sleeping-face",
	});
}

export default Component;
