import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in6lw_b8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in6lw_b8o"/>`,
		"fallback": "selfhst:rustpad-light",
	});
}

export default Component;
