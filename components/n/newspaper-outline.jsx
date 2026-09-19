import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmc06hb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmc06hb7b"/>`,
		"fallback": "flowbite:newspaper-outline",
	});
}

export default Component;
