import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h38852bjh.css';
import '../../css/t/tbroity_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h38852bjh wm-k"/><path class="tbroity_m wm-s"/></g>`,
		"fallback": "withicons:stamp-gloss",
	});
}

export default Component;
