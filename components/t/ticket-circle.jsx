import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fbqvhflsi.css';
import '../../css/o/o0r1uzksv.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fbqvhflsi"/><path class="o0r1uzksv"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:ticket-circle",
	});
}

export default Component;
