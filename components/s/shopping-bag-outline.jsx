import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sggzf-1qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sggzf-1qr"/>`,
		"fallback": "flowbite:shopping-bag-outline",
	});
}

export default Component;
