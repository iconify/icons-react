import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi64b0bch.css';

const viewBox = {"width":560,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi64b0bch"/>`,
		"fallback": "il:unlock",
	});
}

export default Component;
