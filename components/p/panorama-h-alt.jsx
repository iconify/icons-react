import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo-qmjehl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo-qmjehl"/>`,
		"fallback": "uil:panorama-h-alt",
	});
}

export default Component;
