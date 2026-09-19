import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn8e2rbrj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn8e2rbrj"/>`,
		"fallback": "fa6-solid:motorcycle",
	});
}

export default Component;
