import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8x7bwbch.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8x7bwbch"/>`,
		"fallback": "la:random",
	});
}

export default Component;
