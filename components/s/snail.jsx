import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsod13b5l.css';
import '../../css/o/oppxh5bey.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jsod13b5l"/><path class="oppxh5bey"/></g>`,
		"fallback": "at-icons:snail",
	});
}

export default Component;
