import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk8pohd4d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk8pohd4d"/>`,
		"fallback": "pullo:text-wrap-bold",
	});
}

export default Component;
