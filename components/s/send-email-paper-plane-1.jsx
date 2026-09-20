import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-7rukgbc.css';
import '../../css/l/lu1huab3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-7rukgbc"/><path class="lu1huab3h"/>`,
		"fallback": "streamline-freehand:send-email-paper-plane-1",
	});
}

export default Component;
