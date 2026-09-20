import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c35ky7bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c35ky7bsj"/>`,
		"fallback": "token:sub",
	});
}

export default Component;
