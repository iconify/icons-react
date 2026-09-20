import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgp5n5ugm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgp5n5ugm"/>`,
		"fallback": "solar:sheet-outline",
	});
}

export default Component;
