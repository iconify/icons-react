import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfncn9b1t.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfncn9b1t"/>`,
		"fallback": "formkit:stepback",
	});
}

export default Component;
