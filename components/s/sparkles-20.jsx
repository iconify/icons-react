import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jekpe8lyr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jekpe8lyr"/>`,
		"fallback": "energy-icons:sparkles-20",
	});
}

export default Component;
