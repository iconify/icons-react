import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7n9xvbey.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7n9xvbey"/>`,
		"fallback": "carbon:rotate-counterclockwise-filled",
	});
}

export default Component;
