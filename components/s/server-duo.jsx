import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dta1u_c9n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfbjbebmh.css';
import '../../css/s/s6wi2fiqk.css';
import '../../css/c/cdgxmnxdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dta1u_c9n secondary"/><g class="dt0cm9dhy primary"><path class="pfbjbebmh"/><path class="s6wi2fiqk"/><path class="cdgxmnxdo"/></g>`,
		"fallback": "iconaut:server-duo",
	});
}

export default Component;
