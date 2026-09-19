import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs8yz5fab.css';
import '../../css/j/j3onqyb5u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fs8yz5fab"/><path clip-rule="evenodd" class="j3onqyb5u"/></g>`,
		"fallback": "glyphs:tags-bold",
	});
}

export default Component;
