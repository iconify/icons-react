import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cxpl0dpti.css';
import '../../css/c/c2mxj3bwl.css';
import '../../css/j/j524vjwlf.css';
import '../../css/y/ylymz3bds.css';
import '../../css/g/g40r1-b2g.css';
import '../../css/i/ieiphgbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cxpl0dpti wm-shadow"/><path class="c2mxj3bwl"/><path class="j524vjwlf"/><path class="ylymz3bds"/><path class="g40r1-b2g"/><path class="ieiphgbqw wm-s"/></g>`,
		"fallback": "withicons-retro:users-plus",
	});
}

export default Component;
