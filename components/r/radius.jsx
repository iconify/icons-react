import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt4x1e_6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt4x1e_6u"/>`,
		"fallback": "pixelarticons:radius",
	});
}

export default Component;
