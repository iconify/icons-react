import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er5bmi5ai.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er5bmi5ai"/>`,
		"fallback": "whh:toothbrush",
	});
}

export default Component;
