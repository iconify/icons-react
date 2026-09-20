import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx2vqp2yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx2vqp2yd"/>`,
		"fallback": "simple-icons:swr",
	});
}

export default Component;
