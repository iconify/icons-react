import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_qejgbiz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_qejgbiz"/>`,
		"fallback": "file-icons:jolie",
	});
}

export default Component;
