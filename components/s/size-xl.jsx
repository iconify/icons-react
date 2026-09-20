import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilt0r1bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilt0r1bny"/>`,
		"fallback": "mdi:size-xl",
	});
}

export default Component;
