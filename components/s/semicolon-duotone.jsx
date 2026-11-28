import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oche6t6ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oche6t6ju primary"/>`,
		"fallback": "iconaut:semicolon-duotone",
	});
}

export default Component;
