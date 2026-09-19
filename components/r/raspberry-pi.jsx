import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa8ssc4_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa8ssc4_u"/>`,
		"fallback": "cbi:raspberry-pi",
	});
}

export default Component;
