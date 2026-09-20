import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhb33z5lj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhb33z5lj"/>`,
		"fallback": "la:republican-solid",
	});
}

export default Component;
