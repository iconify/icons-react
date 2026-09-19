import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkv4lj3ug.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkv4lj3ug"/>`,
		"fallback": "ps:scissors",
	});
}

export default Component;
