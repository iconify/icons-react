import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx53cu8on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx53cu8on"/>`,
		"fallback": "mingcute:wave-fill",
	});
}

export default Component;
