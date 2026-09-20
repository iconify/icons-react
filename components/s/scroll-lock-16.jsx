import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_g4o-8ic.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_g4o-8ic"/>`,
		"fallback": "qlementine-icons:scroll-lock-16",
	});
}

export default Component;
