import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaneb2bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaneb2bgr"/>`,
		"fallback": "mingcute:leo-fill",
	});
}

export default Component;
