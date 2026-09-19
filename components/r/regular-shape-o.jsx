import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up3xwf3il.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up3xwf3il"/>`,
		"fallback": "gis:regular-shape-o",
	});
}

export default Component;
