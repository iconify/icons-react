import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5n8go3pf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5n8go3pf"/>`,
		"fallback": "foundation:list",
	});
}

export default Component;
