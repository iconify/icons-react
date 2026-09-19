import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhc7mbtcx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhc7mbtcx"/>`,
		"fallback": "garden:puzzle-piece-stroke-12",
	});
}

export default Component;
