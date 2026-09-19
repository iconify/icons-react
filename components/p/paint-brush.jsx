import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-7x2dsjp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-7x2dsjp"/>`,
		"fallback": "fa7-solid:paint-brush",
	});
}

export default Component;
