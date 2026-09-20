import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsc84_2my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsc84_2my"/>`,
		"fallback": "pixelarticons:square-scissors-sharp",
	});
}

export default Component;
