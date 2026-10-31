import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fwt-n_bej.css';
import '../../css/r/r8syq6nxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fwt-n_bej wm-k"/><path class="r8syq6nxr wm-a"/></g>`,
		"fallback": "withicons:reply-all-gloss",
	});
}

export default Component;
