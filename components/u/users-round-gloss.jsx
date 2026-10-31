import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/beg0qni4u.css';
import '../../css/i/if-q0gzgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="beg0qni4u wm-k"/><path class="if-q0gzgs wm-a"/></g>`,
		"fallback": "withicons:users-round-gloss",
	});
}

export default Component;
