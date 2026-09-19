import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8myxrsji.css';
import '../../css/f/fn6lbqmuk.css';
import '../../css/a/afy8xbjmk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w8myxrsji"/><path clip-rule="evenodd" class="fn6lbqmuk"/><path class="afy8xbjmk"/></g>`,
		"fallback": "glyphs:street-view-bold",
	});
}

export default Component;
