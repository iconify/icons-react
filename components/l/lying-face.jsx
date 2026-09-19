import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0mjnebcp.css';
import '../../css/y/yxch2dygj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w0mjnebcp"/><path class="yxch2dygj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:lying-face",
	});
}

export default Component;
