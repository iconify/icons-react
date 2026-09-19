import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du2py5bet.css';

const viewBox = {"width":407,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du2py5bet"/>`,
		"fallback": "fa6-brands:raspberry-pi",
	});
}

export default Component;
