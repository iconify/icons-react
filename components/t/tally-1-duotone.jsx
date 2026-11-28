import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz948sdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz948sdil primary"/>`,
		"fallback": "iconaut:tally-1-duotone",
	});
}

export default Component;
