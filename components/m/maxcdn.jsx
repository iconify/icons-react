import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ear6xob-i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ear6xob-i"/>`,
		"fallback": "la:maxcdn",
	});
}

export default Component;
