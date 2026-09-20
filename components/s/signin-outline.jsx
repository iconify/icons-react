import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0-4vtf0c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0-4vtf0c"/>`,
		"fallback": "teenyicons:signin-outline",
	});
}

export default Component;
