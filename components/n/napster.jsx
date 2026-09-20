import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv3_5ob-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv3_5ob-x"/>`,
		"fallback": "la:napster",
	});
}

export default Component;
