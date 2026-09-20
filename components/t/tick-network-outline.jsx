import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lekd1dbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lekd1dbdb"/>`,
		"fallback": "mdi:tick-network-outline",
	});
}

export default Component;
