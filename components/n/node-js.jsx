import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv6d6372h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv6d6372h"/>`,
		"fallback": "fa6-brands:node-js",
	});
}

export default Component;
