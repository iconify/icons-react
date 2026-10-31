import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dzuu9sb6n.css';
import '../../css/w/wf8yifq6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dzuu9sb6n wm-k"/><path class="wf8yifq6l wm-s"/></g>`,
		"fallback": "withicons:lotus-gloss",
	});
}

export default Component;
