import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_o_u3b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_o_u3b0u"/>`,
		"fallback": "ri:picture-in-picture-line",
	});
}

export default Component;
