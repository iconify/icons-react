import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1x6j7b0n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1x6j7b0n"/>`,
		"fallback": "charm:map",
	});
}

export default Component;
