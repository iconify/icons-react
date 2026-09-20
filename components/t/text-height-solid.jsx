import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_6-kgpqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_6-kgpqs"/>`,
		"fallback": "la:text-height-solid",
	});
}

export default Component;
