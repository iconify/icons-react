import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5v5asbue.css';
import '../../css/d/djipz6cyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5v5asbue"/><path class="djipz6cyr"/>`,
		"fallback": "boxicons:message-bubble-star",
	});
}

export default Component;
