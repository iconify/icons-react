import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-psefcsk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-psefcsk"/>`,
		"fallback": "la:pinterest-square",
	});
}

export default Component;
