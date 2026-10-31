import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pgiid8x1m.css';
import '../../css/n/n_qya2b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pgiid8x1m"/><path class="n_qya2b6g"/></g>`,
		"fallback": "withicons-retro:superscript",
	});
}

export default Component;
