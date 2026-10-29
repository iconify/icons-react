import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t9g5kvbye.css';
import '../../css/t/trdla8jeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t9g5kvbye"/><path class="trdla8jeo wm-a"/></g>`,
		"fallback": "withicons:layout-list",
	});
}

export default Component;
