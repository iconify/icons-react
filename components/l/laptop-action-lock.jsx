import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s9mmu803s.css';
import '../../css/y/yg7bw-bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s9mmu803s"/><path class="yg7bw-bxr"/></g>`,
		"fallback": "streamline-freehand:laptop-action-lock",
	});
}

export default Component;
