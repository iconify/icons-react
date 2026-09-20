import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5r6won4c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5r6won4c"/>`,
		"fallback": "teenyicons:paintbrush-outline",
	});
}

export default Component;
