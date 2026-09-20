import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr32j03ns.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr32j03ns"/>`,
		"fallback": "pinhead:plane-ascending-above-water",
	});
}

export default Component;
