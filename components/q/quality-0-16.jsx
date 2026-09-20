import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxjbm7yov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxjbm7yov"/>`,
		"fallback": "qlementine-icons:quality-0-16",
	});
}

export default Component;
