import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h51m56u_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h51m56u_y"/>`,
		"fallback": "mdi:radiobox-blank",
	});
}

export default Component;
