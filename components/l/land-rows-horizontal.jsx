import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-z8-fb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-z8-fb6s"/>`,
		"fallback": "mdi:land-rows-horizontal",
	});
}

export default Component;
