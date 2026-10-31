import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8li0ibhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8li0ibhj"/>`,
		"fallback": "coolicons:ship-fill-round",
	});
}

export default Component;
