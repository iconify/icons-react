import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn3b59bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn3b59bmp"/>`,
		"fallback": "noviair-light:mushroom-check",
	});
}

export default Component;
