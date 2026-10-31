import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-b2ssb2y.css';
import '../../css/a/a2ojjubiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k y-b2ssb2y"/><path class="a2ojjubiv wm-s"/></g>`,
		"fallback": "withicons:phone-off-gloss",
	});
}

export default Component;
