import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqp8m2bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqp8m2bks"/>`,
		"fallback": "mingcute:jeep-line",
	});
}

export default Component;
