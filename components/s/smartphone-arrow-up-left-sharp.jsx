import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojs3iy_9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojs3iy_9v"/>`,
		"fallback": "keyline-icons:smartphone-arrow-up-left-sharp",
	});
}

export default Component;
