import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7not2p8q.css';
import '../../css/e/e-x1c4yrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a7not2p8q"/><path class="e-x1c4yrw wm-a"/></g>`,
		"fallback": "withicons:text-cursor-input",
	});
}

export default Component;
