import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzfby6bzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzfby6bzz"/>`,
		"fallback": "carbon:load-balancer-pool",
	});
}

export default Component;
