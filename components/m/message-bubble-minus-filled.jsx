import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g97jyebka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g97jyebka"/>`,
		"fallback": "boxicons:message-bubble-minus-filled",
	});
}

export default Component;
