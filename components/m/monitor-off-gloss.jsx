import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vg2e3ibmz.css';
import '../../css/k/kt73dr4no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vg2e3ibmz wm-k"/><path class="kt73dr4no wm-s"/></g>`,
		"fallback": "withicons:monitor-off-gloss",
	});
}

export default Component;
