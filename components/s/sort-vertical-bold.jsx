import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0nj5essx.css';
import '../../css/t/tl8qmubzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0nj5essx"/><path class="tl8qmubzh"/>`,
		"fallback": "solar:sort-vertical-bold",
	});
}

export default Component;
