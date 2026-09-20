import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huqpiok9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huqpiok9o"/>`,
		"fallback": "pixelarticons:tool-case",
	});
}

export default Component;
