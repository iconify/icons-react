import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c17kk1-8t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c17kk1-8t"/>`,
		"fallback": "at-icons:joystick",
	});
}

export default Component;
