import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glq10si6c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glq10si6c"/>`,
		"fallback": "foundation:torso-business",
	});
}

export default Component;
