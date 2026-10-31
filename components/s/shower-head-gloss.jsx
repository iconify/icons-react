import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t-rxirbbe.css';
import '../../css/w/wo-flbbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t-rxirbbe wm-k"/><path class="wm-s wo-flbbds"/></g>`,
		"fallback": "withicons:shower-head-gloss",
	});
}

export default Component;
