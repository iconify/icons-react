import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_anj2b6u.css';
import '../../css/b/bm7c4r5hg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="b_anj2b6u"/><path clip-rule="evenodd" class="bm7c4r5hg"/></g>`,
		"fallback": "glyphs:video-bold",
	});
}

export default Component;
