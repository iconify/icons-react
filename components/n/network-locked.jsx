import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coghedhns.css';

const viewBox = {"width":472,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coghedhns"/>`,
		"fallback": "zmdi:network-locked",
	});
}

export default Component;
