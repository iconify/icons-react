import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8x0ib4bs.css';
import '../../css/v/vjnfcfbjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8x0ib4bs"/><path class="vjnfcfbjd"/>`,
		"fallback": "energy-icons:redo-20-bold",
	});
}

export default Component;
