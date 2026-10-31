import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wn-xdjbdv.css';
import '../../css/s/sfu3nqb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wn-xdjbdv"/><path class="sfu3nqb9d"/></g>`,
		"fallback": "withicons-retro:minimize",
	});
}

export default Component;
