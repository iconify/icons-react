import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g5z22kbrr.css';
import '../../css/p/phvoj20xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g5z22kbrr"/><path class="phvoj20xd"/></g>`,
		"fallback": "streamline-freehand:mobile-phone-hand-hold",
	});
}

export default Component;
