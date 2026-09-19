import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju-rj399k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju-rj399k"/>`,
		"fallback": "dinkie-icons:translate-hebrew-latin",
	});
}

export default Component;
