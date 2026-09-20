import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my8u2_bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my8u2_bsp"/>`,
		"fallback": "pixelarticons:letter-u",
	});
}

export default Component;
