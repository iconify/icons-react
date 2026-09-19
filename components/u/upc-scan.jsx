import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp6hhk2lp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp6hhk2lp"/>`,
		"fallback": "bi:upc-scan",
	});
}

export default Component;
