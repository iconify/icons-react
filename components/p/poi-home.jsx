import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8x4b0bmi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8x4b0bmi"/>`,
		"fallback": "gis:poi-home",
	});
}

export default Component;
