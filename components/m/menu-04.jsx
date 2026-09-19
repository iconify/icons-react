import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_z3-fbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_z3-fbqm"/>`,
		"fallback": "hugeicons:menu-04",
	});
}

export default Component;
