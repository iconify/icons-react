import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbl_nlblo.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbl_nlblo"/>`,
		"fallback": "fa6-solid:users-rectangle",
	});
}

export default Component;
