import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4tt-6big.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4tt-6big"/>`,
		"fallback": "teenyicons:servers-outline",
	});
}

export default Component;
