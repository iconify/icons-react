import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg501v9yz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg501v9yz"/>`,
		"fallback": "teenyicons:section-remove-outline",
	});
}

export default Component;
