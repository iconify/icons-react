import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aiwia2b6v.css';
import '../../css/s/sttqdgtpq.css';
import '../../css/e/ejr4vub7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aiwia2b6v"/><path class="sttqdgtpq"/><path class="ejr4vub7j"/></g>`,
		"fallback": "gg:media-podcast",
	});
}

export default Component;
