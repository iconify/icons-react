import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6q3yrbjc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6q3yrbjc"/>`,
		"fallback": "dinkie-icons:page-facing-up-filled",
	});
}

export default Component;
