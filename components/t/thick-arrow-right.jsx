import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akufad7xf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akufad7xf"/>`,
		"fallback": "radix-icons:thick-arrow-right",
	});
}

export default Component;
