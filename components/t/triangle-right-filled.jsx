import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j6u8hyefq.css';
import '../../css/n/nq6ygfb3o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j6u8hyefq"/><path class="nq6ygfb3o"/></g>`,
		"fallback": "pepicons-pencil:triangle-right-filled",
	});
}

export default Component;
