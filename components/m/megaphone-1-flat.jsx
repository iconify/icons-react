import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u8h1n0bqe.css';
import '../../css/f/fptm9e5bd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u8h1n0bqe"/><path class="fptm9e5bd"/></g>`,
		"fallback": "streamline-flex-color:megaphone-1-flat",
	});
}

export default Component;
