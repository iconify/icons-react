import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bo8hd1a3b.css';
import '../../css/q/qb5_rxbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bo8hd1a3b"/><path class="qb5_rxbbq"/></g>`,
		"fallback": "withicons-retro:more-horizontal",
	});
}

export default Component;
