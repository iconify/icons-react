import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke76vd66d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke76vd66d"/>`,
		"fallback": "mingcute:milk-fill",
	});
}

export default Component;
