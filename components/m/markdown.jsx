import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qto-1actj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qto-1actj"/>`,
		"fallback": "fa6-brands:markdown",
	});
}

export default Component;
