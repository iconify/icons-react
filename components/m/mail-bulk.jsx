import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2xitt6tm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2xitt6tm"/>`,
		"fallback": "la:mail-bulk",
	});
}

export default Component;
