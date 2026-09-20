import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzb-kg7ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzb-kg7ff"/>`,
		"fallback": "mdi:send-secure",
	});
}

export default Component;
