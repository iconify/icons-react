import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c4pk0sbwj.css';
import '../../css/y/y0owuj2kk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c4pk0sbwj"/><path class="y0owuj2kk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:warning",
	});
}

export default Component;
