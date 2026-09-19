import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1nxs9bli.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1nxs9bli"/>`,
		"fallback": "fa-solid:question",
	});
}

export default Component;
