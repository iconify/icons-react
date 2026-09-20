import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-m6x_4pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-m6x_4pp"/>`,
		"fallback": "si:notifications-alt-line",
	});
}

export default Component;
