import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1uww3jwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1uww3jwn"/>`,
		"fallback": "mingcute:vip-1-fill",
	});
}

export default Component;
