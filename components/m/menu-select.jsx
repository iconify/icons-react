import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m32k1ef5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m32k1ef5q"/>`,
		"fallback": "boxicons:menu-select",
	});
}

export default Component;
