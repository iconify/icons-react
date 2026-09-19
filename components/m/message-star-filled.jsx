import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x45u8ng5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x45u8ng5u"/>`,
		"fallback": "boxicons:message-star-filled",
	});
}

export default Component;
