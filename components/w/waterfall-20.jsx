import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhx3t-acu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhx3t-acu"/>`,
		"fallback": "energy-icons:waterfall-20",
	});
}

export default Component;
