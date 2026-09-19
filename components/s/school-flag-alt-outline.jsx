import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sicut5b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sicut5b7k"/>`,
		"fallback": "flowbite:school-flag-alt-outline",
	});
}

export default Component;
