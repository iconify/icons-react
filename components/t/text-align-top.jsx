import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqo8bfnty.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqo8bfnty"/>`,
		"fallback": "fluent-mdl2:text-align-top",
	});
}

export default Component;
