import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fceivfb7b.css';
import '../../css/s/s8z29utgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fceivfb7b"/><path class="s8z29utgb"/></g>`,
		"fallback": "streamline-freehand:lens-horizontal",
	});
}

export default Component;
