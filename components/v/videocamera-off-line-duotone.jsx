import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f57-ii-8e.css';
import '../../css/l/lennyzbya.css';
import '../../css/p/pb353_d1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f57-ii-8e"/><path class="lennyzbya"/><path class="pb353_d1u"/></g>`,
		"fallback": "solar:videocamera-off-line-duotone",
	});
}

export default Component;
