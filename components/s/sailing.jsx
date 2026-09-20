import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwl7ukh2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwl7ukh2h"/>`,
		"fallback": "mdi:sailing",
	});
}

export default Component;
