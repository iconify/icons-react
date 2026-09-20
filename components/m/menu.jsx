import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu7qf6bzr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu7qf6bzr"/>`,
		"fallback": "iwwa:menu",
	});
}

export default Component;
