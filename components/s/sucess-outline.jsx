import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcfaa0b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcfaa0b_h"/>`,
		"fallback": "mdi:sucess-outline",
	});
}

export default Component;
