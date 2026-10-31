import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rmmjovc3u.css';
import '../../css/n/nc20ogbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rmmjovc3u wm-k"/><path class="nc20ogbdw wm-a"/></g>`,
		"fallback": "withicons:microphone-gloss",
	});
}

export default Component;
