import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u8t7lb2xj.css';
import '../../css/j/jvgjsbbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u8t7lb2xj wm-k"/><path class="jvgjsbbhh wm-s"/></g>`,
		"fallback": "withicons:message-square-dot-gloss",
	});
}

export default Component;
