import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-m3seolj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-m3seolj"/>`,
		"fallback": "oi:volume-off",
	});
}

export default Component;
