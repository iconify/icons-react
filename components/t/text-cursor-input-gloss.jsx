import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bnx-5n-rd.css';
import '../../css/q/q65xftc-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bnx-5n-rd wm-k"/><path class="q65xftc-v wm-a"/></g>`,
		"fallback": "withicons:text-cursor-input-gloss",
	});
}

export default Component;
