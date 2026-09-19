import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-jdclmww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-jdclmww"/>`,
		"fallback": "flowbite:truck-clock-outline",
	});
}

export default Component;
