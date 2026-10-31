import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/ds1vlg6hq.css';
import '../../css/o/ocq4okbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ds1vlg6hq"/><path class="ocq4okbpo"/></g>`,
		"fallback": "withicons-retro:tornado",
	});
}

export default Component;
