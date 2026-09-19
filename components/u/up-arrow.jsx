import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go63bd4jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go63bd4jt"/>`,
		"fallback": "bx:up-arrow",
	});
}

export default Component;
