import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1n2l3blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1n2l3blm"/>`,
		"fallback": "guidance:right-2-short-arrow",
	});
}

export default Component;
