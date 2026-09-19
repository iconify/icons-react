import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hng-1kbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hng-1kbdq"/>`,
		"fallback": "griddy-icons:sale-filled",
	});
}

export default Component;
