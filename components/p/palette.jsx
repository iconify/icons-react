import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb4yqob1i.css';

const viewBox = {"width":769,"height":690};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb4yqob1i"/>`,
		"fallback": "ls:palette",
	});
}

export default Component;
