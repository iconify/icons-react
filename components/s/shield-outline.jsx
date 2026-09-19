import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_u_3ebpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_u_3ebpa"/>`,
		"fallback": "flowbite:shield-outline",
	});
}

export default Component;
