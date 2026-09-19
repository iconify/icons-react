import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4wrbw_dy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4wrbw_dy"/>`,
		"fallback": "carbon:number-6",
	});
}

export default Component;
