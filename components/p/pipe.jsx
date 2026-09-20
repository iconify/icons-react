import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w65hz1z2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w65hz1z2l"/>`,
		"fallback": "mdi:pipe",
	});
}

export default Component;
