import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs-iz4qkj.css';
import '../../css/o/oqygufz8c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs-iz4qkj"/><path class="oqygufz8c"/>`,
		"fallback": "devicon:linkedin",
	});
}

export default Component;
