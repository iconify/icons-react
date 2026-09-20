import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf115ku_t.css';
import '../../css/f/fsylwrh0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rf115ku_t"/><path class="fsylwrh0w"/></g>`,
		"fallback": "solar:square-bottom-down-outline",
	});
}

export default Component;
