import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-7lnjbeu.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-7lnjbeu"/>`,
		"fallback": "zmdi:pause-circle-outline",
	});
}

export default Component;
