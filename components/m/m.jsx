import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_2gwyvwb.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_2gwyvwb"/>`,
		"fallback": "whh:m",
	});
}

export default Component;
