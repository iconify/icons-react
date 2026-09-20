import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ext-fqzpc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ext-fqzpc"/>`,
		"fallback": "teenyicons:tick-circle-outline",
	});
}

export default Component;
