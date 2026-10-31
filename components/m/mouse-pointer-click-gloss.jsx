import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vji6bu2th.css';
import '../../css/q/qmwab792q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vji6bu2th wm-k"/><path class="qmwab792q wm-s"/></g>`,
		"fallback": "withicons:mouse-pointer-click-gloss",
	});
}

export default Component;
