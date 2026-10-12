import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3b-xrbit.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3b-xrbit"/>`,
		"fallback": "energy-icons:square-root-20-bold",
	});
}

export default Component;
