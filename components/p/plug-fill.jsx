import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap2f_x_-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap2f_x_-d"/>`,
		"fallback": "ri:plug-fill",
	});
}

export default Component;
