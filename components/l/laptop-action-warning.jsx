import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjvr28b2f.css';
import '../../css/c/czct_nbnc.css';
import '../../css/q/q5dedrb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jjvr28b2f"/><path class="czct_nbnc"/><path class="q5dedrb5k"/></g>`,
		"fallback": "streamline-freehand:laptop-action-warning",
	});
}

export default Component;
