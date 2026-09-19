import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxjmq8b0l.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxjmq8b0l"/>`,
		"fallback": "fad:slider-round-2",
	});
}

export default Component;
