import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0h6gbipf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0h6gbipf"/>`,
		"fallback": "fa7-solid:users-between-lines",
	});
}

export default Component;
