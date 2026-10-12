import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmmbku79r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmmbku79r"/>`,
		"fallback": "garden:lightning-bolt-stroke-20",
	});
}

export default Component;
