import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft-3lt0tv.css';
import '../../css/n/neh-dob8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft-3lt0tv"/><path class="neh-dob8o"/>`,
		"fallback": "solar:paint-brush-bold-duotone",
	});
}

export default Component;
