import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2sfgu9ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2sfgu9ek"/>`,
		"fallback": "iconoir:pants-alt",
	});
}

export default Component;
