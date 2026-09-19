import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwmffobfh.css';
import '../../css/t/t6xc7ubwd.css';
import '../../css/t/tmle8u6kk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uwmffobfh"/><path clip-rule="evenodd" class="t6xc7ubwd"/><path class="tmle8u6kk"/></g>`,
		"fallback": "glyphs:running-bold",
	});
}

export default Component;
