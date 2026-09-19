import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nesf27b2u.css';
import '../../css/g/gaqyehb9l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nesf27b2u"/><path class="gaqyehb9l"/></g>`,
		"fallback": "glyphs:signal-2-bold",
	});
}

export default Component;
