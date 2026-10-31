import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/po7yf1b9e.css';
import '../../css/v/v4h-hybof.css';
import '../../css/v/vm-ee6bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="po7yf1b9e wm-shadow"/><path class="v4h-hybof"/><path class="vm-ee6bas"/></g>`,
		"fallback": "withicons-retro:table",
	});
}

export default Component;
