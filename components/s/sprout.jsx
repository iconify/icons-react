import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-a4k4b8u.css';
import '../../css/w/wneoubc6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z-a4k4b8u"/><path class="wm-a wneoubc6n"/></g>`,
		"fallback": "withicons:sprout",
	});
}

export default Component;
