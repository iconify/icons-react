import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubw90kood.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubw90kood"/>`,
		"fallback": "pixelarticons:notification",
	});
}

export default Component;
