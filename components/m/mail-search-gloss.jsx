import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d6chdd_5m.css';
import '../../css/g/g19zvub7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d6chdd_5m wm-k"/><path class="g19zvub7h wm-s"/></g>`,
		"fallback": "withicons:mail-search-gloss",
	});
}

export default Component;
