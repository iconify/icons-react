import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5u6034ce.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5u6034ce"/>`,
		"fallback": "fa6-solid:ruler-vertical",
	});
}

export default Component;
