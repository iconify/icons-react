import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uk91lk37r.css';
import '../../css/j/j9ybth-qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uk91lk37r"/><path class="j9ybth-qw"/></g>`,
		"fallback": "withicons-bauhaus:map-pin-check",
	});
}

export default Component;
