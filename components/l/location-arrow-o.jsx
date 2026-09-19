import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok5msxpqv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok5msxpqv"/>`,
		"fallback": "gis:location-arrow-o",
	});
}

export default Component;
