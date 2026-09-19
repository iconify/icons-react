import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wpmez7k7c.css';
import '../../css/z/z__fx-0ht.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wpmez7k7c"/><path class="z__fx-0ht"/></g>`,
		"fallback": "glyphs:square-half-bold",
	});
}

export default Component;
