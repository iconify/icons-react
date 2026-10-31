import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fvb9qqb-a.css';
import '../../css/s/s-rlfwblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fvb9qqb-a wm-k"/><path class="s-rlfwblp wm-s"/></g>`,
		"fallback": "withicons:reindeer-gloss",
	});
}

export default Component;
