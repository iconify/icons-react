import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ntm1kjjdn.css';
import '../../css/c/cp0gdkboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ntm1kjjdn wm-k"/><path class="cp0gdkboh wm-a"/></g>`,
		"fallback": "withicons:north-star-gloss",
	});
}

export default Component;
