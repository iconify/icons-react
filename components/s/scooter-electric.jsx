import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl5p9ubwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl5p9ubwa"/>`,
		"fallback": "mdi:scooter-electric",
	});
}

export default Component;
