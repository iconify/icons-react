import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hews1obbw.css';
import '../../css/a/a-b575bcn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hews1obbw"/><path class="a-b575bcn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:melting-face",
	});
}

export default Component;
