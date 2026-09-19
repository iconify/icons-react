import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf46e_bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf46e_bjo"/>`,
		"fallback": "boxicons:message-circle-minus-filled",
	});
}

export default Component;
