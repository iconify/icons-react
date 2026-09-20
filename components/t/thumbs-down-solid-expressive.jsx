import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bu3v-13ex.css';
import '../../css/z/zg3an5w4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bu3v-13ex"/><path class="zg3an5w4b"/></g>`,
		"fallback": "nrk:thumbs-down-solid-expressive",
	});
}

export default Component;
