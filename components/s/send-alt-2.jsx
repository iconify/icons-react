import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix5oy4d5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix5oy4d5i"/>`,
		"fallback": "boxicons:send-alt-2",
	});
}

export default Component;
