import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pjd3eub3t.css';
import '../../css/u/usrn0yb6x.css';
import '../../css/x/xn9eb62lq.css';
import '../../css/j/joezrjbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pjd3eub3t"/><path class="usrn0yb6x"/><path class="xn9eb62lq"/><path class="joezrjbqr"/></g>`,
		"fallback": "hugeicons:quiz-05",
	});
}

export default Component;
