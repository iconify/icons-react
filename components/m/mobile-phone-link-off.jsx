import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8gghcceb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8gghcceb"/>`,
		"fallback": "mdi:mobile-phone-link-off",
	});
}

export default Component;
