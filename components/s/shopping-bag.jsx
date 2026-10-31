import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y0hd2gbyh.css';
import '../../css/s/s4w2bf9id.css';
import '../../css/f/fbywhxb1m.css';
import '../../css/q/ql_ribb2e.css';
import '../../css/a/an1clnbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow y0hd2gbyh"/><path class="s4w2bf9id"/><path class="fbywhxb1m"/><path class="ql_ribb2e"/><path class="an1clnbuj"/></g>`,
		"fallback": "withicons-retro:shopping-bag",
	});
}

export default Component;
