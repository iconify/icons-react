import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ef-k16byw.css';
import '../../css/b/b0r5vdgjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ef-k16byw"/><path class="b0r5vdgjo"/></g>`,
		"fallback": "iconaut:subscript",
	});
}

export default Component;
