import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji4o9ze8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji4o9ze8o"/>`,
		"fallback": "mingcute:table-3-line",
	});
}

export default Component;
