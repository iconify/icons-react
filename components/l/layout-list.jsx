import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pnjyjzbrr.css';
import '../../css/w/wosaks6nq.css';
import '../../css/y/ytz3bmr-g.css';
import '../../css/q/qj1kjybuz.css';
import '../../css/b/bgqj8wqog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pnjyjzbrr wm-shadow"/><path class="wosaks6nq"/><path class="ytz3bmr-g"/><path class="qj1kjybuz"/><path class="bgqj8wqog"/></g>`,
		"fallback": "withicons-retro:layout-list",
	});
}

export default Component;
