import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d49j50b_v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d49j50b_v"/>`,
		"fallback": "teenyicons:lightning-cable-outline",
	});
}

export default Component;
