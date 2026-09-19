import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4f-kt29c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4f-kt29c"/>`,
		"fallback": "dinkie-icons:slightly-frowning-face-filled",
	});
}

export default Component;
