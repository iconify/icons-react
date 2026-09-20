import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j29yx1bwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j29yx1bwx"/>`,
		"fallback": "la:long-arrow-alt-up",
	});
}

export default Component;
