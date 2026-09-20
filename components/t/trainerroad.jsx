import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohu3o4set.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohu3o4set"/>`,
		"fallback": "thesvg-color:trainerroad",
	});
}

export default Component;
