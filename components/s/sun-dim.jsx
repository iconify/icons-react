import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcxp6pb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcxp6pb4q"/>`,
		"fallback": "boxicons:sun-dim",
	});
}

export default Component;
