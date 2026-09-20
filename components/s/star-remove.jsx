import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kntp21bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kntp21bid"/>`,
		"fallback": "mdi:star-remove",
	});
}

export default Component;
