import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4x29vb0t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4x29vb0t"/>`,
		"fallback": "garden:phone-call-out-stroke-12",
	});
}

export default Component;
