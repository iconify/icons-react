import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa1hmy53v.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa1hmy53v"/>`,
		"fallback": "picon:sword",
	});
}

export default Component;
