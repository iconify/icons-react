import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucn26kqdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucn26kqdk"/>`,
		"fallback": "flowbite:moon-plus-outline",
	});
}

export default Component;
