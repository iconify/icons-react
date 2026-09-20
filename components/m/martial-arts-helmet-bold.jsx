import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs6zg7buw.css';
import '../../css/q/qnp378w6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs6zg7buw"/><path class="qnp378w6q"/>`,
		"fallback": "streamline-ultimate:martial-arts-helmet-bold",
	});
}

export default Component;
