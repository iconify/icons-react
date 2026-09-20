import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cio1c0bky.css';
import '../../css/a/ave95yb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cio1c0bky"/><path class="ave95yb5m"/>`,
		"fallback": "streamline-ultimate:send-email-fly-bold",
	});
}

export default Component;
