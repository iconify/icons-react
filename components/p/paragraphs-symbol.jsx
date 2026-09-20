import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xsg_k4nun.css';
import '../../css/j/jrmul_53e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xsg_k4nun"/><path class="jrmul_53e"/></g>`,
		"fallback": "streamline-freehand:paragraphs-symbol",
	});
}

export default Component;
