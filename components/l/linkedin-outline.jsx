import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxw9d-z9c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxw9d-z9c"/>`,
		"fallback": "teenyicons:linkedin-outline",
	});
}

export default Component;
