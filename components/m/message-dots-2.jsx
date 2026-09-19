import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p56h_bbeb.css';
import '../../css/b/bhtd76b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p56h_bbeb"/><path class="bhtd76b5u"/>`,
		"fallback": "boxicons:message-dots-2",
	});
}

export default Component;
