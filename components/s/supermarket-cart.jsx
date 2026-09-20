import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp4964afi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp4964afi"/>`,
		"fallback": "roentgen:supermarket-cart",
	});
}

export default Component;
