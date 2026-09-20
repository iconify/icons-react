import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq3vk_b1e.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq3vk_b1e"/>`,
		"fallback": "memory:message",
	});
}

export default Component;
