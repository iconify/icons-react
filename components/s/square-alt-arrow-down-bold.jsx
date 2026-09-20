import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9fqr6ixu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i9fqr6ixu"/>`,
		"fallback": "solar:square-alt-arrow-down-bold",
	});
}

export default Component;
