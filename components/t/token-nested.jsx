import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ytaqn7dvp.css';
import '../../css/u/u35m6qohc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ytaqn7dvp"/><path class="u35m6qohc"/></g>`,
		"fallback": "oui:token-nested",
	});
}

export default Component;
