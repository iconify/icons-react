import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g53eo1eqr.css';
import '../../css/w/w3_8jspbn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g53eo1eqr"/><path class="w3_8jspbn"/></g>`,
		"fallback": "pepicons:music-note-single",
	});
}

export default Component;
