import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jt54-o5yg.css';
import '../../css/p/pqgj8yh1x.css';
import '../../css/s/sdu7iab5q.css';
import '../../css/z/zdgxbg6ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jt54-o5yg"/><path class="pqgj8yh1x"/><path class="sdu7iab5q"/><path class="zdgxbg6ki"/></g>`,
		"fallback": "iconaut:swap-duo",
	});
}

export default Component;
