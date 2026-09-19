import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skwvzrwzi.css';
import '../../css/y/yt3_clgmk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="skwvzrwzi"/><path class="yt3_clgmk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:laptop",
	});
}

export default Component;
