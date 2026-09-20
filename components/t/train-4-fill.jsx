import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8x9qfy9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8x9qfy9o"/>`,
		"fallback": "mingcute:train-4-fill",
	});
}

export default Component;
