import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g3806gb-b.css';
import '../../css/j/jfdf9lbir.css';
import '../../css/j/j-oll0j4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g3806gb-b"/><path class="jfdf9lbir"/><path class="j-oll0j4c"/></g>`,
		"fallback": "withicons-bauhaus:split",
	});
}

export default Component;
