import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h8-xhlb7q.css';
import '../../css/i/iw0b69bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h8-xhlb7q wm-k"/><path class="iw0b69bjs wm-a"/></g>`,
		"fallback": "withicons:waves-gloss",
	});
}

export default Component;
