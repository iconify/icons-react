import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz8sj8b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz8sj8b_h"/>`,
		"fallback": "mingcute:tornado-2-line",
	});
}

export default Component;
