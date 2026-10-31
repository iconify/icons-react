import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/todwkteti.css';
import '../../css/u/u7_w1tbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="todwkteti"/><path class="u7_w1tbpk"/></g>`,
		"fallback": "withicons-retro:sort",
	});
}

export default Component;
