import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4i6xrbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4i6xrbia"/>`,
		"fallback": "simple-icons:pepsi",
	});
}

export default Component;
