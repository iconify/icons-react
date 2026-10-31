import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/doscxbe0j.css';
import '../../css/p/p4yjz1bdu.css';
import '../../css/o/o7lgvwflj.css';
import '../../css/c/c0ihz9bht.css';
import '../../css/s/szyhx_awp.css';
import '../../css/y/yrelwm4iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="doscxbe0j wm-shadow"/><path class="p4yjz1bdu"/><path class="o7lgvwflj"/><path class="c0ihz9bht"/><path class="szyhx_awp"/><path class="yrelwm4iw"/></g>`,
		"fallback": "withicons-retro:marigold",
	});
}

export default Component;
