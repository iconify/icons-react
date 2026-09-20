import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc0qmpbsy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc0qmpbsy"/>`,
		"fallback": "radix-icons:triangle-left",
	});
}

export default Component;
