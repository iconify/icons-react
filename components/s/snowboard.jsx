import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-i8x-tan.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-i8x-tan"/>`,
		"fallback": "picon:snowboard",
	});
}

export default Component;
