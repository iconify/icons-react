import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqy2yo0ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqy2yo0ir"/>`,
		"fallback": "thesvg-color:longhorn",
	});
}

export default Component;
