import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry9s8ub7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry9s8ub7u"/>`,
		"fallback": "si:user-alt-3-line",
	});
}

export default Component;
