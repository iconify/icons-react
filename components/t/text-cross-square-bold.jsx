import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycv1egpln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ycv1egpln"/>`,
		"fallback": "solar:text-cross-square-bold",
	});
}

export default Component;
