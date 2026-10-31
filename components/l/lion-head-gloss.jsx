import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qgab7acjg.css';
import '../../css/y/ysy9eib6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qgab7acjg wm-k"/><path class="wm-s ysy9eib6n"/></g>`,
		"fallback": "withicons:lion-head-gloss",
	});
}

export default Component;
