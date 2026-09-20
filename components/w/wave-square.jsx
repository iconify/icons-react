import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umps4yb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umps4yb4u"/>`,
		"fallback": "la:wave-square",
	});
}

export default Component;
