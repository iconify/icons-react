import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j8oi71b0s.css';
import '../../css/x/xms00_elr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j8oi71b0s wm-k"/><path class="wm-s xms00_elr"/></g>`,
		"fallback": "withicons:pichkari-gloss",
	});
}

export default Component;
