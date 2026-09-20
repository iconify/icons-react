import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eokmg58xz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eokmg58xz"/>`,
		"fallback": "rivet-icons:shopping-bag",
	});
}

export default Component;
