import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky387gxav.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky387gxav"/>`,
		"fallback": "cib:vue-js",
	});
}

export default Component;
