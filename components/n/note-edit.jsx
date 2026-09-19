import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq8rxfeud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq8rxfeud"/>`,
		"fallback": "hugeicons:note-edit",
	});
}

export default Component;
