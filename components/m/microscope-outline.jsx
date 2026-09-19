import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aok5afb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aok5afb8c"/>`,
		"fallback": "flowbite:microscope-outline",
	});
}

export default Component;
