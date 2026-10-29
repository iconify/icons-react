import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rg3866-_q.css';
import '../../css/t/tnuzb1b8j.css';
import '../../css/b/b6q0p2b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rg3866-_q"/><path class="tnuzb1b8j"/><path class="b6q0p2b8p"/></g>`,
		"fallback": "withicons-bauhaus:pen-line",
	});
}

export default Component;
