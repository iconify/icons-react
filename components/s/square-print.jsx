import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5ynor4cz.css';
import '../../css/h/h0pr25blg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5ynor4cz"/><path clip-rule="evenodd" class="h0pr25blg"/></g>`,
		"fallback": "pepicons:square-print",
	});
}

export default Component;
