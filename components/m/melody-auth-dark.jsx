import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqppkb4wy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqppkb4wy"/>`,
		"fallback": "selfhst:melody-auth-dark",
	});
}

export default Component;
