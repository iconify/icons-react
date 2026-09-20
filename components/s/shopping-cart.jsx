import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed9y2pb3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed9y2pb3q"/>`,
		"fallback": "rivet-icons:shopping-cart",
	});
}

export default Component;
