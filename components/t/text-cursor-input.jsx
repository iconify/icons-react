import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8i_m7m5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8i_m7m5v"/>`,
		"fallback": "pixelarticons:text-cursor-input",
	});
}

export default Component;
