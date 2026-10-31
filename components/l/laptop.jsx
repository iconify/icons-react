import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oydb5z4nx.css';
import '../../css/r/r6dsat99m.css';
import '../../css/g/g66mlkmat.css';
import '../../css/a/arh_q9bxf.css';
import '../../css/s/sybmwq3tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oydb5z4nx wm-shadow"/><path class="r6dsat99m"/><path class="g66mlkmat"/><path class="arh_q9bxf"/><path class="sybmwq3tj"/></g>`,
		"fallback": "withicons-retro:laptop",
	});
}

export default Component;
