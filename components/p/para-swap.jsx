import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx7v_41ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx7v_41ey"/>`,
		"fallback": "token:para-swap",
	});
}

export default Component;
