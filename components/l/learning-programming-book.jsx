import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfpfxmb4b.css';
import '../../css/i/i7oxkab5v.css';
import '../../css/c/cwx-hqb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfpfxmb4b"/><path class="i7oxkab5v"/><path class="cwx-hqb2h"/></g>`,
		"fallback": "streamline-freehand:learning-programming-book",
	});
}

export default Component;
