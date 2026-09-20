import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtvkwwb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtvkwwb0m"/>`,
		"fallback": "mynaui:letter-z-square-solid",
	});
}

export default Component;
