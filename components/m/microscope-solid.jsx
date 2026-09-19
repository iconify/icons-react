import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo_8_sedt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo_8_sedt"/>`,
		"fallback": "flowbite:microscope-solid",
	});
}

export default Component;
