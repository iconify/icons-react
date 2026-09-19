import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyp3-vbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyp3-vbdx"/>`,
		"fallback": "flowbite:redo-outline",
	});
}

export default Component;
