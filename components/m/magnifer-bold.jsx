import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id7vrj0ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="id7vrj0ur"/>`,
		"fallback": "solar:magnifer-bold",
	});
}

export default Component;
