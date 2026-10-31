import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/feia55onp.css';
import '../../css/l/l5_3ncj5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="feia55onp wm-k"/><path class="l5_3ncj5c wm-s"/></g>`,
		"fallback": "withicons:satellite-dish-gloss",
	});
}

export default Component;
