import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9bgxeb0o.css';
import '../../css/c/ccjw-8b-r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9bgxeb0o"/><path class="ccjw-8b-r"/>`,
		"fallback": "energy-icons:line-height-20-bold",
	});
}

export default Component;
