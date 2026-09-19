import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhtd76b5u.css';
import '../../css/w/w5v5asbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhtd76b5u"/><path class="w5v5asbue"/>`,
		"fallback": "boxicons:message-bubble-dots-2",
	});
}

export default Component;
