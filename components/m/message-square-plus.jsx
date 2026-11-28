import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd5z3d9fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd5z3d9fn"/>`,
		"fallback": "noviair:message-square-plus",
	});
}

export default Component;
