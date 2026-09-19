import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaki46b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaki46b2u"/>`,
		"fallback": "boxicons:message-bubble-exclamation-filled",
	});
}

export default Component;
