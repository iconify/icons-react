import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyw9u8buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyw9u8buj"/>`,
		"fallback": "lucide:keyboard-off",
	});
}

export default Component;
