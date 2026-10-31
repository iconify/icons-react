import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f2pzzfsmr.css';
import '../../css/x/xswqybnlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f2pzzfsmr"/><path class="xswqybnlr"/></g>`,
		"fallback": "withicons-retro:table-of-contents",
	});
}

export default Component;
