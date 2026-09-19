import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9gpoj-sc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9gpoj-sc"/>`,
		"fallback": "dinkie-icons:keyboard-filled",
	});
}

export default Component;
