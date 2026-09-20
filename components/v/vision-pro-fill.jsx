import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7d4d647u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f7d4d647u"/>`,
		"fallback": "keyline-icons:vision-pro-fill",
	});
}

export default Component;
