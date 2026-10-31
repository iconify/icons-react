import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c3jfkzbhj.css';
import '../../css/s/s39my1bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c3jfkzbhj"/><path class="s39my1bxp"/></g>`,
		"fallback": "withicons-retro:subscript",
	});
}

export default Component;
