import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp238ub8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp238ub8u"/>`,
		"fallback": "mdi:stairs",
	});
}

export default Component;
