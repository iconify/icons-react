import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1e0vbssl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1e0vbssl"/>`,
		"fallback": "radix-icons:server",
	});
}

export default Component;
