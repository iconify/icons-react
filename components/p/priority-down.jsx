import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvkv3kbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvkv3kbfz"/>`,
		"fallback": "iconoir:priority-down",
	});
}

export default Component;
