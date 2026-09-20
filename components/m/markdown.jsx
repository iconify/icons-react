import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl6x-yv6m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl6x-yv6m"/>`,
		"fallback": "picon:markdown",
	});
}

export default Component;
