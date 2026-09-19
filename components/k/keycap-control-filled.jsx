import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-ek5q7td.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-ek5q7td"/>`,
		"fallback": "dinkie-icons:keycap-control-filled",
	});
}

export default Component;
