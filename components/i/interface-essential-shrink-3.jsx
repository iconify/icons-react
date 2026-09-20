import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2e1dmb6k.css';
import '../../css/u/up-8pq6ia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2e1dmb6k"/><path class="up-8pq6ia"/>`,
		"fallback": "streamline-pixel:interface-essential-shrink-3",
	});
}

export default Component;
