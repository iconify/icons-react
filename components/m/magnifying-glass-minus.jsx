import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9oj01ydv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9oj01ydv"/>`,
		"fallback": "fa6-solid:magnifying-glass-minus",
	});
}

export default Component;
