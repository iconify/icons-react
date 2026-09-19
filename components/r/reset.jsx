import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz3wstb6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz3wstb6b"/>`,
		"fallback": "carbon:reset",
	});
}

export default Component;
