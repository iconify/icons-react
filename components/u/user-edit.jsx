import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_j8aabeg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_j8aabeg"/>`,
		"fallback": "fa-solid:user-edit",
	});
}

export default Component;
