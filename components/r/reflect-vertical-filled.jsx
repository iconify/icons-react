import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3tv04khk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3tv04khk"/>`,
		"fallback": "boxicons:reflect-vertical-filled",
	});
}

export default Component;
