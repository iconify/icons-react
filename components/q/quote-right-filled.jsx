import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys2-isb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys2-isb7d"/>`,
		"fallback": "boxicons:quote-right-filled",
	});
}

export default Component;
