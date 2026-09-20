import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7vk71b4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7vk71b4y"/>`,
		"fallback": "subway:join-corner-arrow-5",
	});
}

export default Component;
