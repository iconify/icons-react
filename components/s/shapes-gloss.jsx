import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gpq-fcbhb.css';
import '../../css/p/p4ukr4b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gpq-fcbhb wm-k"/><path class="p4ukr4b9b wm-a"/></g>`,
		"fallback": "withicons:shapes-gloss",
	});
}

export default Component;
