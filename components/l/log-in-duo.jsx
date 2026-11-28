import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ahhc2jbks.css';
import '../../css/r/rw0tps2ji.css';
import '../../css/f/fs4i84bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ahhc2jbks"/><path class="rw0tps2ji"/><path class="fs4i84bmk"/></g>`,
		"fallback": "iconaut:log-in-duo",
	});
}

export default Component;
