import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf0bw4z3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf0bw4z3v"/>`,
		"fallback": "la:rupee-sign-solid",
	});
}

export default Component;
