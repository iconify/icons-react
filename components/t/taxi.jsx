import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tnjkjq1ws.css';
import '../../css/f/fvvslcb2i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tnjkjq1ws"/><path class="fvvslcb2i"/></g>`,
		"fallback": "pepicons-pencil:taxi",
	});
}

export default Component;
