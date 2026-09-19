import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/snc-xhbno.css';
import '../../css/e/e6t8k77zu.css';
import '../../css/p/p0dv5ocbm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="snc-xhbno"/><path class="e6t8k77zu"/><path class="p0dv5ocbm"/></g>`,
		"fallback": "glyphs:temperature-cold-bold",
	});
}

export default Component;
