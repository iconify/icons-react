import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/flit91bke.css';
import '../../css/a/aaiagdbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="flit91bke"/><path class="aaiagdbtt"/></g>`,
		"fallback": "withicons-retro:person-swimming",
	});
}

export default Component;
