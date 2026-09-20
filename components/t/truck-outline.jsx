import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du5cymr0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du5cymr0n"/>`,
		"fallback": "mdi:truck-outline",
	});
}

export default Component;
