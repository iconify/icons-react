import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quzra8ibi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quzra8ibi"/>`,
		"fallback": "mingcute:time-duration-fill",
	});
}

export default Component;
