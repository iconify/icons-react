import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7_1u4b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7_1u4b4r"/>`,
		"fallback": "pixelarticons:pencil",
	});
}

export default Component;
