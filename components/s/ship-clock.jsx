import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s77q7qbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s77q7qbma"/>`,
		"fallback": "noviair-light:ship-clock",
	});
}

export default Component;
