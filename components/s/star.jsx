import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzcl-4a-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzcl-4a-r"/>`,
		"fallback": "hugeicons:star",
	});
}

export default Component;
