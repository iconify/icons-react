import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4lny_b2c.css';
import '../../css/e/ey5fvkbdu.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4lny_b2c"/><path class="ey5fvkbdu"/>`,
		"fallback": "formkit:reply",
	});
}

export default Component;
