import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub3z3pbln.css';
import '../../css/f/fe-h--bgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub3z3pbln"/><circle class="fe-h--bgr"/>`,
		"fallback": "ion:save",
	});
}

export default Component;
