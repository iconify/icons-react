import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mip59zb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mip59zb8q"/>`,
		"fallback": "boxicons:pencil-draw-filled",
	});
}

export default Component;
