import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycwaf5q0z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycwaf5q0z"/>`,
		"fallback": "devicon-plain:systemd",
	});
}

export default Component;
