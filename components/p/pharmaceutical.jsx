import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu07fk1vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu07fk1vk"/>`,
		"fallback": "mdi:pharmaceutical",
	});
}

export default Component;
