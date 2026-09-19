import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw0p3-b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw0p3-b3n"/>`,
		"fallback": "boxicons:sun-rain",
	});
}

export default Component;
