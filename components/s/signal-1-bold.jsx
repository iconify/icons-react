import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpqdkk4rp.css';
import '../../css/r/rzriwv-_c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kpqdkk4rp"/><path class="rzriwv-_c"/></g>`,
		"fallback": "glyphs:signal-1-bold",
	});
}

export default Component;
