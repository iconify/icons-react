import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj8d-0s5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj8d-0s5e"/>`,
		"fallback": "mingcute:vector-group-fill",
	});
}

export default Component;
