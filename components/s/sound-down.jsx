import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc5qjjbur.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc5qjjbur"/>`,
		"fallback": "ps:sound-down",
	});
}

export default Component;
