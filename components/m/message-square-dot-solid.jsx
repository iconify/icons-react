import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qnqbq3j6e.css';
import '../../css/i/it_uyc8nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qnqbq3j6e"/><path class="it_uyc8nu wm-s"/></g>`,
		"fallback": "withicons:message-square-dot-solid",
	});
}

export default Component;
