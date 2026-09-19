import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf401xb8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf401xb8x"/>`,
		"fallback": "garden:terminal-cli-stroke-16",
	});
}

export default Component;
