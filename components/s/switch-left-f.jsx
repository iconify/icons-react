import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j91bif6wm.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j91bif6wm"/>`,
		"fallback": "jam:switch-left-f",
	});
}

export default Component;
