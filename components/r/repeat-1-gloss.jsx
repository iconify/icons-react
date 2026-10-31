import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uyx66s80w.css';
import '../../css/m/mv2y5qbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uyx66s80w wm-k"/><path class="mv2y5qbbr wm-s"/></g>`,
		"fallback": "withicons:repeat-1-gloss",
	});
}

export default Component;
