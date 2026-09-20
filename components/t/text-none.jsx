import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_4amlb7l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_4amlb7l"/>`,
		"fallback": "radix-icons:text-none",
	});
}

export default Component;
