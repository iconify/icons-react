import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxmr4jb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxmr4jb4s"/>`,
		"fallback": "mdi:video-switch-outline",
	});
}

export default Component;
