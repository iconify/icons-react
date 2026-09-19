import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j8d99titz.css';
import '../../css/e/e_u_wmb7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j8d99titz"/><path class="e_u_wmb7l"/></g>`,
		"fallback": "pepicons:menu-print",
	});
}

export default Component;
