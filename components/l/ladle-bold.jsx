import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7zq275ci.css';
import '../../css/f/fzcjrqbtu.css';
import '../../css/t/tg66l2b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7zq275ci"/><path class="fzcjrqbtu"/><path class="tg66l2b1z"/>`,
		"fallback": "solar:ladle-bold",
	});
}

export default Component;
