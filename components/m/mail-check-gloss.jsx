import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s8kdqjcwh.css';
import '../../css/d/df8xvob6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s8kdqjcwh wm-k"/><path class="df8xvob6v wm-s"/></g>`,
		"fallback": "withicons:mail-check-gloss",
	});
}

export default Component;
