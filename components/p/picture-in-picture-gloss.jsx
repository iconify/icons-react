import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ttleshb1q.css';
import '../../css/g/gmoxee9wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ttleshb1q wm-k"/><path class="gmoxee9wn wm-a"/></g>`,
		"fallback": "withicons:picture-in-picture-gloss",
	});
}

export default Component;
