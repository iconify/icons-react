import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y69tapb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y69tapb3z"/>`,
		"fallback": "keyline-icons:square-alert-fill",
	});
}

export default Component;
