import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w0e35nbtv.css';
import '../../css/p/p_5x7ib1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w0e35nbtv wm-k"/><path class="p_5x7ib1o wm-s"/></g>`,
		"fallback": "withicons:remove-formatting-gloss",
	});
}

export default Component;
