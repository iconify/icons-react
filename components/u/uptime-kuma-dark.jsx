import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktgkes3tk.css';

const viewBox = {"width":622,"height":622};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktgkes3tk"/>`,
		"fallback": "selfhst:uptime-kuma-dark",
	});
}

export default Component;
