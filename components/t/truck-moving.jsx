import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyixm7aak.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyixm7aak"/>`,
		"fallback": "fa6-solid:truck-moving",
	});
}

export default Component;
