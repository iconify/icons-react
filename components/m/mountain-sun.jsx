import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tysrqtbnr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tysrqtbnr"/>`,
		"fallback": "fa6-solid:mountain-sun",
	});
}

export default Component;
