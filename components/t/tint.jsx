import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qghl1qx4z.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qghl1qx4z"/>`,
		"fallback": "fa-solid:tint",
	});
}

export default Component;
