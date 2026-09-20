import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_1oyq81x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_1oyq81x"/>`,
		"fallback": "mdi:shoe-sneaker",
	});
}

export default Component;
