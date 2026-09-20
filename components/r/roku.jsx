import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en-lb3mzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en-lb3mzs"/>`,
		"fallback": "simple-icons:roku",
	});
}

export default Component;
