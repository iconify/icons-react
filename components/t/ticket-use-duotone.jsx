import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r__s5ackm.css';
import '../../css/u/u4v-5cb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r__s5ackm"/><path class="u4v-5cb2x"/></g>`,
		"fallback": "lets-icons:ticket-use-duotone",
	});
}

export default Component;
