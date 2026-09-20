import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrb8-hcea.css';
import '../../css/i/i46axmbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrb8-hcea"/><path class="i46axmbny"/>`,
		"fallback": "streamline-ultimate:send-email-envelope-bold",
	});
}

export default Component;
