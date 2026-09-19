import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apbnsr93k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apbnsr93k"/>`,
		"fallback": "fad:preset-a",
	});
}

export default Component;
