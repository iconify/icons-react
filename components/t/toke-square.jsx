import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruvov2dhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruvov2dhz"/>`,
		"fallback": "pixelarticons:toke-square",
	});
}

export default Component;
