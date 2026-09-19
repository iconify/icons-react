import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhkvjm8nj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhkvjm8nj"/>`,
		"fallback": "dinkie-icons:otfeature-liga",
	});
}

export default Component;
