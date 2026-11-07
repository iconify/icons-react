import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw3wxe0oi.css';
import '../../css/f/fnwhem6it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nw3wxe0oi"/><path class="fnwhem6it"/>`,
		"fallback": "solar:notes-bold-duotone",
	});
}

export default Component;
