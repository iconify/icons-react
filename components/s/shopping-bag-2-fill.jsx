import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oih2r0kjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oih2r0kjb"/>`,
		"fallback": "mingcute:shopping-bag-2-fill",
	});
}

export default Component;
