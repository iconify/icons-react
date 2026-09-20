import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vccoy3bdq.css';
import '../../css/g/grpilriwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vccoy3bdq"/><path class="grpilriwz"/></g>`,
		"fallback": "streamline-freehand:notes-book",
	});
}

export default Component;
