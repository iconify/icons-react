import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjc9fdfhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjc9fdfhj"/>`,
		"fallback": "pixelarticons:luggage",
	});
}

export default Component;
