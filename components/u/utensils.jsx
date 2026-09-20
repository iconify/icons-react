import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le7nlthrs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le7nlthrs"/>`,
		"fallback": "rivet-icons:utensils",
	});
}

export default Component;
