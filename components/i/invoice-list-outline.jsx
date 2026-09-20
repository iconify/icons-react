import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw37fjbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw37fjbgd"/>`,
		"fallback": "mdi:invoice-list-outline",
	});
}

export default Component;
