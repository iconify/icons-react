import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le8sjw5jh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le8sjw5jh"/>`,
		"fallback": "dinkie-icons:stopwatch-filled",
	});
}

export default Component;
