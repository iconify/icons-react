import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aba8wwbyq.css';
import '../../css/i/iei8ttpxs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aba8wwbyq"/><path clip-rule="evenodd" class="iei8ttpxs"/></g>`,
		"fallback": "pepicons:play-print",
	});
}

export default Component;
