import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh97r8j1l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh97r8j1l"/>`,
		"fallback": "fa-brands:pinterest-square",
	});
}

export default Component;
