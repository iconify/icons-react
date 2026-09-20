import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhdck4bsj.css';
import '../../css/s/s8ab0obcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dhdck4bsj"/><path class="s8ab0obcq"/></g>`,
		"fallback": "reicon:mouse-duotone",
	});
}

export default Component;
