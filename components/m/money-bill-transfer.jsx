import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0otvhb0e.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0otvhb0e"/>`,
		"fallback": "fa6-solid:money-bill-transfer",
	});
}

export default Component;
