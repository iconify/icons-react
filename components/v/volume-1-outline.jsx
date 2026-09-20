import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmizmbbzj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmizmbbzj"/>`,
		"fallback": "teenyicons:volume-1-outline",
	});
}

export default Component;
