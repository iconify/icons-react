import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l-72nbccn.css';
import '../../css/x/xnuytgkwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l-72nbccn"/><path class="xnuytgkwb"/></g>`,
		"fallback": "withicons:virus-duo",
	});
}

export default Component;
