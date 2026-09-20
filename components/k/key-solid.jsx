import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccc5fnb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccc5fnb7r"/>`,
		"fallback": "pixelarticons:key-solid",
	});
}

export default Component;
