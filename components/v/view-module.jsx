import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tak0hzc8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tak0hzc8z"/>`,
		"fallback": "cil:view-module",
	});
}

export default Component;
