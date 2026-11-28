import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylj6s1ump.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylj6s1ump"/>`,
		"fallback": "noviair-light:lightbulb",
	});
}

export default Component;
