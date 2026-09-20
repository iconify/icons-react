import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i_5rgcc3c.css';
import '../../css/l/lqcjitb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i_5rgcc3c"/><path class="lqcjitb2h"/></g>`,
		"fallback": "solar:moon-stars-outline",
	});
}

export default Component;
