import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htyf4ib6k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htyf4ib6k"/>`,
		"fallback": "dinkie-icons:question-face",
	});
}

export default Component;
