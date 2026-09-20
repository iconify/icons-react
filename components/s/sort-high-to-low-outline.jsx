import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7-sevcfd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7-sevcfd"/>`,
		"fallback": "teenyicons:sort-high-to-low-outline",
	});
}

export default Component;
