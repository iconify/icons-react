import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gehy3pb4s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gehy3pb4s"/>`,
		"fallback": "garden:interlocking-rings-stroke-12",
	});
}

export default Component;
