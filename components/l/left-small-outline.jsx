import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke_s0c99d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke_s0c99d"/>`,
		"fallback": "teenyicons:left-small-outline",
	});
}

export default Component;
