import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz2ti29gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz2ti29gx"/>`,
		"fallback": "solar:transmission-square-bold",
	});
}

export default Component;
