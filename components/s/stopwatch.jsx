import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh8wpzbqz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh8wpzbqz"/>`,
		"fallback": "dinkie-icons:stopwatch",
	});
}

export default Component;
