import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgrk8c2ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgrk8c2ry"/>`,
		"fallback": "noviair-light:presentation-plus",
	});
}

export default Component;
