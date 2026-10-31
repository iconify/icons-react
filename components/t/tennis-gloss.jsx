import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c3ipag9wm.css';
import '../../css/s/sfci3xnmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c3ipag9wm wm-k"/><path class="sfci3xnmy wm-a"/></g>`,
		"fallback": "withicons:tennis-gloss",
	});
}

export default Component;
