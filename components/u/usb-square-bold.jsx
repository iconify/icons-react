import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzw00zbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzw00zbnf"/>`,
		"fallback": "solar:usb-square-bold",
	});
}

export default Component;
