import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcjsrx5uw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcjsrx5uw"/>`,
		"fallback": "la:long-arrow-alt-left",
	});
}

export default Component;
