import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh602ub6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh602ub6u"/>`,
		"fallback": "mdi:picture-in-picture-bottom-right-outline",
	});
}

export default Component;
