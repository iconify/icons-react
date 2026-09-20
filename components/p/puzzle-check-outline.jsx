import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n68d9jb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n68d9jb5y"/>`,
		"fallback": "mdi:puzzle-check-outline",
	});
}

export default Component;
