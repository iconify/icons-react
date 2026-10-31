import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/ssq0-2bas.css';
import '../../css/u/uy9qpmfhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ssq0-2bas wm-k"/><path class="uy9qpmfhm wm-s"/></g>`,
		"fallback": "withicons:monitor-smartphone-gloss",
	});
}

export default Component;
