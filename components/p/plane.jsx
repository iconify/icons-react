import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqt-fc2_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqt-fc2_u"/>`,
		"fallback": "keyline-icons:plane",
	});
}

export default Component;
