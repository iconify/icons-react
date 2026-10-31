import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/chjgcyraq.css';
import '../../css/h/hpmtuvc9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="chjgcyraq wm-k"/><path class="hpmtuvc9h wm-a"/></g>`,
		"fallback": "withicons:underline-gloss",
	});
}

export default Component;
