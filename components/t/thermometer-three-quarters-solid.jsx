import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppq1nhbgc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppq1nhbgc"/>`,
		"fallback": "la:thermometer-three-quarters-solid",
	});
}

export default Component;
