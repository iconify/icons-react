import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf6h0-b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf6h0-b7c"/>`,
		"fallback": "flowbite:keyboard-solid",
	});
}

export default Component;
