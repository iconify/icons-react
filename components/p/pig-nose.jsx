import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7tkgac0x.css';
import '../../css/c/crb2z56vn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z7tkgac0x"/><path class="crb2z56vn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pig-nose",
	});
}

export default Component;
