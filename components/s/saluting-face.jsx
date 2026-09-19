import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1h5npbai.css';
import '../../css/x/xjuy25b1n.css';
import '../../css/u/usf18bcfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1h5npbai"/><path class="xjuy25b1n"/><path class="usf18bcfz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:saluting-face",
	});
}

export default Component;
