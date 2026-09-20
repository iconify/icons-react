import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f81fp6svz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f81fp6svz"/>`,
		"fallback": "pixelarticons:siren-off",
	});
}

export default Component;
