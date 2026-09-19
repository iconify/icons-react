import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwq2k-b2y.css';

const viewBox = {"width":1408,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwq2k-b2y"/>`,
		"fallback": "vs:user-waiter",
	});
}

export default Component;
