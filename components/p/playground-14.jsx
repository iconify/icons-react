import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-yl-m8ra.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-yl-m8ra"/>`,
		"fallback": "osmic:playground-14",
	});
}

export default Component;
