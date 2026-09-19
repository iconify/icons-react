import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke-b1vt8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke-b1vt8b"/>`,
		"fallback": "fa6-solid:shapes",
	});
}

export default Component;
