import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lc7-_ubpm.css';
import '../../css/j/jbwnju6cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lc7-_ubpm wm-k"/><path class="jbwnju6cw wm-a"/></g>`,
		"fallback": "withicons:thermometer-gloss",
	});
}

export default Component;
