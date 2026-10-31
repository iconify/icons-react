import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ue1g_obzz.css';
import '../../css/j/jh9iw_b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ue1g_obzz wm-k"/><path class="jh9iw_b2h wm-s"/></g>`,
		"fallback": "withicons:paisley-gloss",
	});
}

export default Component;
