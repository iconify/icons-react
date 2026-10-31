import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u6-dym4-v.css';
import '../../css/b/bfe2wcasz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u6-dym4-v wm-k"/><path class="bfe2wcasz wm-s"/></g>`,
		"fallback": "withicons:mail-x-gloss",
	});
}

export default Component;
