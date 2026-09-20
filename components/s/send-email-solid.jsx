import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdoj7busb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdoj7busb"/>`,
		"fallback": "streamline:send-email-solid",
	});
}

export default Component;
