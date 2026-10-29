import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h3bpwcjgi.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h3bpwcjgi"/><path class="u83h24b3i wm-a"/></g>`,
		"fallback": "withicons:plane-landing",
	});
}

export default Component;
