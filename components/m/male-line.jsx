import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4l-j4b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4l-j4b1w"/>`,
		"fallback": "mingcute:male-line",
	});
}

export default Component;
