import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfin4ebqk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfin4ebqk"/>`,
		"fallback": "garden:sort-stroke-12",
	});
}

export default Component;
