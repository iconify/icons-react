import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh0-fjbav.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh0-fjbav"/>`,
		"fallback": "carbon:stratus",
	});
}

export default Component;
