import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_r8o4g5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_r8o4g5x"/>`,
		"fallback": "uil:server-network-alt",
	});
}

export default Component;
