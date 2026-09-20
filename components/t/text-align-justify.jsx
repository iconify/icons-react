import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufjnn8nee.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufjnn8nee"/>`,
		"fallback": "radix-icons:text-align-justify",
	});
}

export default Component;
