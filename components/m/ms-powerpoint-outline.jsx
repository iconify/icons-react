import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt7s2fbgj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt7s2fbgj"/>`,
		"fallback": "teenyicons:ms-powerpoint-outline",
	});
}

export default Component;
