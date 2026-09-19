import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylz3-15ku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylz3-15ku"/>`,
		"fallback": "cib:kotlin",
	});
}

export default Component;
