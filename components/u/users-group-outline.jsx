import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-ssoxb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-ssoxb8z"/>`,
		"fallback": "flowbite:users-group-outline",
	});
}

export default Component;
