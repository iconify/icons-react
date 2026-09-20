import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0rs5vrxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0rs5vrxl"/>`,
		"fallback": "token:rev3l",
	});
}

export default Component;
