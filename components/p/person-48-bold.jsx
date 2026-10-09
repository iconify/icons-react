import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh5m4gk5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh5m4gk5z"/>`,
		"fallback": "energy-icons:person-48-bold",
	});
}

export default Component;
