import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f25awxivw.css';
import '../../css/t/tyn_bsbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f25awxivw wm-k"/><path class="tyn_bsbgd wm-s"/></g>`,
		"fallback": "withicons:unplug-gloss",
	});
}

export default Component;
