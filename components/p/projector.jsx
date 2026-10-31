import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-g11-76a.css';
import '../../css/y/y0wxsxbyu.css';
import '../../css/z/zioqwz9dq.css';
import '../../css/j/jh5ctibwm.css';
import '../../css/n/ni6eqkbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v-g11-76a wm-shadow"/><path class="y0wxsxbyu"/><path class="zioqwz9dq"/><path class="jh5ctibwm"/><path class="ni6eqkbpk"/></g>`,
		"fallback": "withicons-retro:projector",
	});
}

export default Component;
