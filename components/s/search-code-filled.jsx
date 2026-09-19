import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twu1jgkwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twu1jgkwm"/>`,
		"fallback": "boxicons:search-code-filled",
	});
}

export default Component;
