import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb7iy8b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb7iy8b_l"/>`,
		"fallback": "hugeicons:sun-medium",
	});
}

export default Component;
