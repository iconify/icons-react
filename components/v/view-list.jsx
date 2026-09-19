import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5q44-hod.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5q44-hod"/>`,
		"fallback": "dinkie-icons:view-list",
	});
}

export default Component;
