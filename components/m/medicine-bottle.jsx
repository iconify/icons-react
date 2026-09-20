import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5eglmmgh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5eglmmgh"/>`,
		"fallback": "roentgen:medicine-bottle",
	});
}

export default Component;
