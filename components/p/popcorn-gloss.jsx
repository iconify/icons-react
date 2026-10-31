import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wp_xsok-y.css';
import '../../css/y/y5np4_f7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k wp_xsok-y"/><path class="wm-a y5np4_f7u"/></g>`,
		"fallback": "withicons:popcorn-gloss",
	});
}

export default Component;
