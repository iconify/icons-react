import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kcrww-5rf.css';
import '../../css/k/kfrm7c_1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kcrww-5rf wm-k"/><path class="kfrm7c_1l wm-s"/></g>`,
		"fallback": "withicons:love-letter-gloss",
	});
}

export default Component;
