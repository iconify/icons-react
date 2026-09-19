import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl9ffnbqj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl9ffnbqj"/>`,
		"fallback": "fa7-solid:right-left",
	});
}

export default Component;
