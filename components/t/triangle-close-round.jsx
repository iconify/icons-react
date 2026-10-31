import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz0a0j8fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz0a0j8fe"/>`,
		"fallback": "coolicons:triangle-close-round",
	});
}

export default Component;
