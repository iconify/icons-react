import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4rjqabjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4rjqabjp"/>`,
		"fallback": "iconaut:type-vertical-solid",
	});
}

export default Component;
