import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmghfvc3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmghfvc3e"/>`,
		"fallback": "carbon:letter-ww",
	});
}

export default Component;
