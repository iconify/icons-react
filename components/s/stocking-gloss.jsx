import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x7bj1hvns.css';
import '../../css/x/x4mfbex6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k x7bj1hvns"/><path class="wm-a x4mfbex6k"/></g>`,
		"fallback": "withicons:stocking-gloss",
	});
}

export default Component;
