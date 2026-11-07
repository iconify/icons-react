import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_d_ntx3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_d_ntx3z"/>`,
		"fallback": "solar:move-vertical-linear",
	});
}

export default Component;
