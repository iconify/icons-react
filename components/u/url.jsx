import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvgrnpbwz.css';

const viewBox = {"width":680,"height":810};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvgrnpbwz"/>`,
		"fallback": "il:url",
	});
}

export default Component;
