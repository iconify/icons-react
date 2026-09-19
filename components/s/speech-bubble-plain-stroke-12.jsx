import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr_g1b63o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr_g1b63o"/>`,
		"fallback": "garden:speech-bubble-plain-stroke-12",
	});
}

export default Component;
