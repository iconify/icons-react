import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w257kx71j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w257kx71j"/>`,
		"fallback": "boxicons:sun-rain-filled",
	});
}

export default Component;
