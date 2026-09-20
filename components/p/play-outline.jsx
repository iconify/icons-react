import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6q78qbwx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6q78qbwx"/>`,
		"fallback": "zondicons:play-outline",
	});
}

export default Component;
