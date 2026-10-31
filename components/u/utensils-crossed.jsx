import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yape4u-6m.css';
import '../../css/p/p2bdmybnx.css';
import '../../css/z/zvi15xv1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yape4u-6m"/><path class="p2bdmybnx"/><path class="zvi15xv1k"/></g>`,
		"fallback": "withicons-retro:utensils-crossed",
	});
}

export default Component;
