import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnas58u_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnas58u_u"/>`,
		"fallback": "cbi:lancia",
	});
}

export default Component;
