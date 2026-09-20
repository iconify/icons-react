import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiq9r0b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiq9r0b4u"/>`,
		"fallback": "streamline-ultimate:walking-1-bold",
	});
}

export default Component;
