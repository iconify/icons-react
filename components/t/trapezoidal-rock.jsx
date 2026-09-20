import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-4_ispbs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-4_ispbs"/>`,
		"fallback": "pinhead:trapezoidal-rock",
	});
}

export default Component;
