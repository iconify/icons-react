import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3xo90bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3xo90bim"/>`,
		"fallback": "guidance:up-arrow",
	});
}

export default Component;
