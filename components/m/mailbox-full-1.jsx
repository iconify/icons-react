import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dnw0iiwue.css';
import '../../css/l/l40wobc2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dnw0iiwue"/><path class="l40wobc2l"/></g>`,
		"fallback": "streamline-freehand:mailbox-full-1",
	});
}

export default Component;
