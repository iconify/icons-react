import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6uyw0bfz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6uyw0bfz"/>`,
		"fallback": "qlementine-icons:link-break-16",
	});
}

export default Component;
