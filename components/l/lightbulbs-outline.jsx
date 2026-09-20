import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eleh99bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eleh99bjs"/>`,
		"fallback": "mdi:lightbulbs-outline",
	});
}

export default Component;
