import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/meouyj_nd.css';
import '../../css/i/i89luqb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="meouyj_nd wm-k"/><path class="i89luqb-a wm-s"/></g>`,
		"fallback": "withicons:unlink-gloss",
	});
}

export default Component;
