import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz3r-qb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz3r-qb8r"/>`,
		"fallback": "cil:swap-horizontal",
	});
}

export default Component;
