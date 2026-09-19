import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w12d0osrh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w12d0osrh"/>`,
		"fallback": "devicon-plain:vuejs-wordmark",
	});
}

export default Component;
