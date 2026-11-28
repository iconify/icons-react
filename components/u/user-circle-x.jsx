import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es2oy3b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es2oy3b3e"/>`,
		"fallback": "noviair:user-circle-x",
	});
}

export default Component;
