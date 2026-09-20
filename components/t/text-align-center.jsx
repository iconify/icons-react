import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tznw7je4o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tznw7je4o"/>`,
		"fallback": "radix-icons:text-align-center",
	});
}

export default Component;
