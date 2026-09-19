import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bqxgc7bdb.css';
import '../../css/h/hordmvb4t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bqxgc7bdb"/><path class="hordmvb4t"/></g>`,
		"fallback": "glyphs:lock-open-bold",
	});
}

export default Component;
