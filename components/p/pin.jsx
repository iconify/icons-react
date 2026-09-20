import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zb0z3vbgl.css';
import '../../css/p/pee5nxbvm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zb0z3vbgl"/><path class="pee5nxbvm"/></g>`,
		"fallback": "pepicons-pencil:pin",
	});
}

export default Component;
