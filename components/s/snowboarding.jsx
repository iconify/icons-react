import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdayr551k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdayr551k"/>`,
		"fallback": "fa-solid:snowboarding",
	});
}

export default Component;
