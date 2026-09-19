import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it8xc7b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it8xc7b7f"/>`,
		"fallback": "boxicons:message-circle-exclamation-filled",
	});
}

export default Component;
