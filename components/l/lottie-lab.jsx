import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k25y2fb7n.css';
import '../../css/w/w0h6xabmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b k25y2fb7n"/><path class="b w0h6xabmr"/>`,
		"fallback": "bxl:lottie-lab",
	});
}

export default Component;
