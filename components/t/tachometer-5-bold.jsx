import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mrnj0it8e.css';
import '../../css/c/c6v2y2bpk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mrnj0it8e"/><path clip-rule="evenodd" class="c6v2y2bpk"/></g>`,
		"fallback": "glyphs:tachometer-5-bold",
	});
}

export default Component;
