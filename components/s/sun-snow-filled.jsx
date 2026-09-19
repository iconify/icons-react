import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pab9xkbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pab9xkbdg"/>`,
		"fallback": "boxicons:sun-snow-filled",
	});
}

export default Component;
