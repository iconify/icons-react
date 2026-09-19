import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbh4n79ct.css';
import '../../css/f/f4_-rtbni.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbh4n79ct"/><path class="f4_-rtbni"/></g>`,
		"fallback": "glyphs:signal-4-bold",
	});
}

export default Component;
