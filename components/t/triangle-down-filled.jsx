import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iproufcfa.css';
import '../../css/c/c5zd_ebln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iproufcfa"/><path class="c5zd_ebln"/></g>`,
		"fallback": "pepicons-pencil:triangle-down-filled",
	});
}

export default Component;
