import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0bx69b6p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0bx69b6p"/>`,
		"fallback": "pinhead:vending-machine-with-scoop-of-ice-cream-in-cone",
	});
}

export default Component;
