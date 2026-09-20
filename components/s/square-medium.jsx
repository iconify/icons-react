import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cla-b3b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cla-b3b9c"/>`,
		"fallback": "mdi:square-medium",
	});
}

export default Component;
