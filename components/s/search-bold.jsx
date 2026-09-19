import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsyz5wbnh.css';
import '../../css/n/n76gnxb-z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bsyz5wbnh"/><path class="n76gnxb-z"/></g>`,
		"fallback": "glyphs:search-bold",
	});
}

export default Component;
