import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlxal_o3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlxal_o3t"/>`,
		"fallback": "flowbite:scale-balanced-outline",
	});
}

export default Component;
