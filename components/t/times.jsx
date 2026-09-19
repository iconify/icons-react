import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl_h1w5_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl_h1w5_h"/>`,
		"fallback": "humbleicons:times",
	});
}

export default Component;
