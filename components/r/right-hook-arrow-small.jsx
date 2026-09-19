import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1lmu7b-u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1lmu7b-u"/>`,
		"fallback": "dinkie-icons:right-hook-arrow-small",
	});
}

export default Component;
