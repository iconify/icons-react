import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f3zjrvcqj.css';
import '../../css/i/ih3ld8pwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f3zjrvcqj wm-k"/><path class="ih3ld8pwj wm-a"/></g>`,
		"fallback": "withicons:paw-print-gloss",
	});
}

export default Component;
