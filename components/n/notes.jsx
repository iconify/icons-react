import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9lb6ysvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9lb6ysvy"/>`,
		"fallback": "humbleicons:notes",
	});
}

export default Component;
