import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j5ep5hbtz.css';
import '../../css/u/uc0yabbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j5ep5hbtz"/><path class="uc0yabbtt wm-a"/></g>`,
		"fallback": "withicons:scroll-text",
	});
}

export default Component;
