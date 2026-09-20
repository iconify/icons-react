import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kautov5ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kautov5ob"/>`,
		"fallback": "mingcute:user-hide-line",
	});
}

export default Component;
