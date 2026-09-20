import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhyb4abqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhyb4abqp"/>`,
		"fallback": "qlementine-icons:square-rotated-filled-16",
	});
}

export default Component;
