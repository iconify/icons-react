import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzu3_9bar.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzu3_9bar"/>`,
		"fallback": "fa7-solid:truck-medical",
	});
}

export default Component;
