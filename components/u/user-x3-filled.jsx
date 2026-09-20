import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flstyib1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flstyib1c"/>`,
		"fallback": "reicon:user-x3-filled",
	});
}

export default Component;
