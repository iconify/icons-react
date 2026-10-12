import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co_xwekit.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co_xwekit"/>`,
		"fallback": "garden:sprout-stroke-20",
	});
}

export default Component;
