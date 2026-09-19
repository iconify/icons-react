import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frd6sbckt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frd6sbckt"/>`,
		"fallback": "flowbite:user-edit-outline",
	});
}

export default Component;
