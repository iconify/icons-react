import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fnqqe5b5e.css';
import '../../css/c/c7xnwmbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fnqqe5b5e"/><path class="c7xnwmbpp wm-a"/></g>`,
		"fallback": "withicons:trash",
	});
}

export default Component;
