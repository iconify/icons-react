import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dg20hzb9v.css';
import '../../css/p/pzz362b_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dg20hzb9v"/><path class="pzz362b_c"/></g>`,
		"fallback": "pepicons-print:triangle-right-filled",
	});
}

export default Component;
