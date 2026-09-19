import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwgnkybdd.css';
import '../../css/f/fvo0x63-t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bwgnkybdd"/><path clip-rule="evenodd" class="fvo0x63-t"/></g>`,
		"fallback": "glyphs:user-comment-bold",
	});
}

export default Component;
