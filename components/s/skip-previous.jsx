import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y09lc3bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y09lc3bln"/>`,
		"fallback": "mdi-light:skip-previous",
	});
}

export default Component;
