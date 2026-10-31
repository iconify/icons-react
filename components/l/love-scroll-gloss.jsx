import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uek2e2b5m.css';
import '../../css/j/jnaackbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uek2e2b5m wm-k"/><path class="jnaackbdk wm-s"/></g>`,
		"fallback": "withicons:love-scroll-gloss",
	});
}

export default Component;
