import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ao21d5blb.css';
import '../../css/m/m74-1jszs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ao21d5blb"/><path class="m74-1jszs wm-a"/></g>`,
		"fallback": "withicons:panel-left-open",
	});
}

export default Component;
