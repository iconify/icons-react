import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irjh9jilq.css';
import '../../css/g/ggd2cgbpw.css';
import '../../css/y/yyrmujbrk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="irjh9jilq"/><path class="ggd2cgbpw"/><path class="yyrmujbrk"/></g>`,
		"fallback": "glyphs:star-and-crescent-bold",
	});
}

export default Component;
