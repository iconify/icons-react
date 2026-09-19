import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffmwi4b7h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffmwi4b7h"/>`,
		"fallback": "dinkie-icons:language-han",
	});
}

export default Component;
