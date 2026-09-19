import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7x9wfbjg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7x9wfbjg"/>`,
		"fallback": "fad:lock",
	});
}

export default Component;
