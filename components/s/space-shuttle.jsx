import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3nyc0bxs.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3nyc0bxs"/>`,
		"fallback": "fa-solid:space-shuttle",
	});
}

export default Component;
