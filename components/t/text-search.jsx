import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o8acivbsi.css';
import '../../css/j/jzhyz-p4o.css';
import '../../css/j/j98qpqarz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o8acivbsi"/><path class="jzhyz-p4o"/><path class="j98qpqarz"/></g>`,
		"fallback": "iconaut:text-search",
	});
}

export default Component;
