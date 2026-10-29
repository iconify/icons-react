import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l5-650bny.css';
import '../../css/d/dcqemvmzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l5-650bny"/><path class="dcqemvmzx wm-a"/></g>`,
		"fallback": "withicons:utensils",
	});
}

export default Component;
