import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/py_3l1zrp.css';
import '../../css/b/b5pa0ccfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="py_3l1zrp"/><path class="b5pa0ccfo"/></g>`,
		"fallback": "solar:socket-bold",
	});
}

export default Component;
