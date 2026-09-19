import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdge2cytk.css';
import '../../css/h/hwhrscbqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xdge2cytk"/><path class="hwhrscbqh"/></g>`,
		"fallback": "at-icons:skull-and-crossbones",
	});
}

export default Component;
