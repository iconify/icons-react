import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qaojg7_jp.css';
import '../../css/n/nn6j0m4tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qaojg7_jp"/><path class="nn6j0m4tj"/></g>`,
		"fallback": "withicons-retro:more-vertical",
	});
}

export default Component;
