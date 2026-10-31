import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gvc5p2bxr.css';
import '../../css/r/rxju27b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gvc5p2bxr"/><path class="rxju27b-u"/></g>`,
		"fallback": "coolicons:magic-wand-bulk-round",
	});
}

export default Component;
