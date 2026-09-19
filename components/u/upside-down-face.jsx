import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-u3pzdzo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-u3pzdzo"/>`,
		"fallback": "dinkie-icons:upside-down-face",
	});
}

export default Component;
