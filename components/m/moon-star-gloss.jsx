import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqejesb1x.css';
import '../../css/j/ju4tmmb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jqejesb1x wm-k"/><path class="ju4tmmb_q wm-s"/></g>`,
		"fallback": "withicons:moon-star-gloss",
	});
}

export default Component;
