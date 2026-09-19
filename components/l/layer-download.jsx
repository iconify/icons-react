import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5q8w5tmo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5q8w5tmo"/>`,
		"fallback": "gis:layer-download",
	});
}

export default Component;
