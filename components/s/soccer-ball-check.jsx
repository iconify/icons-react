import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7-9-q0ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7-9-q0ak"/>`,
		"fallback": "noviair:soccer-ball-check",
	});
}

export default Component;
