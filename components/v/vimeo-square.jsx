import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca9mp9bqi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca9mp9bqi"/>`,
		"fallback": "la:vimeo-square",
	});
}

export default Component;
