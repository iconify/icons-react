import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yi1wf0uys.css';
import '../../css/c/c-96yb0_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="yi1wf0uys"/><path class="c-96yb0_m"/></g>`,
		"fallback": "withicons-retro:link",
	});
}

export default Component;
