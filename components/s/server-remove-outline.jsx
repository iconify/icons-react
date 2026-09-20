import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krfa13byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krfa13byl"/>`,
		"fallback": "mdi:server-remove-outline",
	});
}

export default Component;
