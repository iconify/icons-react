import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgs60lb1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgs60lb1t"/>`,
		"fallback": "la:linkedin-in",
	});
}

export default Component;
