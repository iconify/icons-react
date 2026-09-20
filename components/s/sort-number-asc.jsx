import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-y0p4f_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-y0p4f_i"/>`,
		"fallback": "ri:sort-number-asc",
	});
}

export default Component;
