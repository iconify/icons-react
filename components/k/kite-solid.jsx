import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xa6j_4b4y.css';
import '../../css/v/vbvspnbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xa6j_4b4y"/><path class="vbvspnbfe wm-s"/></g>`,
		"fallback": "withicons:kite-solid",
	});
}

export default Component;
