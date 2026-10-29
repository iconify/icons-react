import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e1nl01bml.css';
import '../../css/x/xpmjmd9yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e1nl01bml"/><path class="xpmjmd9yr"/></g>`,
		"fallback": "withicons:key-duo",
	});
}

export default Component;
