import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk6fjp9qb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk6fjp9qb"/>`,
		"fallback": "ix:signal-strength-5",
	});
}

export default Component;
