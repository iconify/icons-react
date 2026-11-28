import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7j4uob4o.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kq238_bbk.css';
import '../../css/j/j5dc5xevt.css';
import '../../css/b/b_4jner7h.css';
import '../../css/p/p-jzhduoi.css';
import '../../css/c/cy-p0l3ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7j4uob4o secondary"/><g class="dt0cm9dhy primary"><path class="kq238_bbk"/><path class="j5dc5xevt"/><path class="b_4jner7h"/><path class="p-jzhduoi"/><path class="cy-p0l3ul"/></g>`,
		"fallback": "iconaut:satellite-dish-duo",
	});
}

export default Component;
