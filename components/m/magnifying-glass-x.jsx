import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt04mfb3z.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt04mfb3z"/>`,
		"fallback": "pullo:magnifying-glass-x",
	});
}

export default Component;
