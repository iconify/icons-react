import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz7-w4vmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz7-w4vmk"/>`,
		"fallback": "mdi-light:magnify",
	});
}

export default Component;
