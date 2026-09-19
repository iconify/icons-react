import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivom5o5ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivom5o5ht"/>`,
		"fallback": "boxicons:message-image-filled",
	});
}

export default Component;
