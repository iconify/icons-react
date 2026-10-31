import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yvlt6ab8p.css';
import '../../css/p/pa9c2mb1b.css';
import '../../css/l/ly85x_b-a.css';
import '../../css/c/cpud5n4fy.css';
import '../../css/y/yqwxfrbbv.css';
import '../../css/s/sy03c705e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yvlt6ab8p"/><path class="pa9c2mb1b"/><path class="ly85x_b-a"/><path class="cpud5n4fy"/><path class="yqwxfrbbv"/><path class="sy03c705e"/></g>`,
		"fallback": "withicons-retro:receipt",
	});
}

export default Component;
