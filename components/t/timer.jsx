import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orr23sbgz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orr23sbgz"/>`,
		"fallback": "famicons:timer",
	});
}

export default Component;
