import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chzbq8n6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="chzbq8n6j"/>`,
		"fallback": "keyline-icons:vision-pro-sharp-fill",
	});
}

export default Component;
