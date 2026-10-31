import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i-vts3tnk.css';
import '../../css/p/p4_wxwbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i-vts3tnk wm-k"/><path class="p4_wxwbmv wm-s"/></g>`,
		"fallback": "withicons:smartphone-message-gloss",
	});
}

export default Component;
