import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_1vk6bon.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_1vk6bon"/>`,
		"fallback": "carbon:interface-usage-alt",
	});
}

export default Component;
