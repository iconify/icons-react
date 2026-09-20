import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7qy0ubco.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7qy0ubco"/>`,
		"fallback": "lineicons:line-double",
	});
}

export default Component;
