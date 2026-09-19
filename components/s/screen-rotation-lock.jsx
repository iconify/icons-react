import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2c5etzdr.css';

const viewBox = {"width":488,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2c5etzdr"/>`,
		"fallback": "zmdi:screen-rotation-lock",
	});
}

export default Component;
