import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu63zhw-d.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu63zhw-d"/>`,
		"fallback": "fa-brands:pinterest-p",
	});
}

export default Component;
