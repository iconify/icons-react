import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoazs4bcs.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoazs4bcs"/>`,
		"fallback": "fa6-solid:truck-ramp-box",
	});
}

export default Component;
